const NAMES = [
  'Анна', 'Вика', 'Магдалина', 'Ксюша', 'Валентина',
  'Матвей', 'Арсений', 'Адриан', 'Марк', 'Алексей'
];

const COMMENTS = [
  'Выглядете отлично!', 'Вау!', 'Круто получилось!',
  'Тебе идёт!', 'Кадр космический!', 'Классный момент!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_SENTENCES = 1;
const MAX_SENTENCES = 2;

// Генерация случайного числа в диапазоне
const getRandomInteger = (minValue, maxValue) => {
  const min = Math.ceil(Math.min(minValue, maxValue));
  const max = Math.floor(Math.max(minValue, maxValue));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Создание массива комментариев
const generateComments = () => {
  const comments = [];
  const commentsCount = getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);

  for (let i = 0; i < commentsCount; i++) {
    const sentencesCount = getRandomInteger(MIN_SENTENCES, MAX_SENTENCES);
    let message = '';

    // Формирование текста комментария из 1-2 предложений
    for (let j = 0; j < sentencesCount; j++) {
      message += getRandomArrayElement(MESSAGES);
      if (j < sentencesCount - 1) {
        message += ' ';
      }
    }

    comments.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: message,
      name: getRandomArrayElement(NAMES)
    });
  }

  return comments;
};

// Создание объекта фотографии
const createPhotoObject = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(COMMENTS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: generateComments()
});

// Генерация массива фотографий
const generatePhotosArray = (count) => {
  const photos = [];
  for (let i = 0; i < count; i++) {
    photos.push(createPhotoObject(i));
  }
  return photos;
};

// Создание массива из 25 фотографий
const photosArray = generatePhotosArray(PHOTOS_COUNT);
export { photosArray }; // без строки ESLint ругается
