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

// Все константы для генерации данных
const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_SENTENCES = 1;
const MAX_SENTENCES = 2;

export {
  NAMES, COMMENTS, MESSAGES, PHOTOS_COUNT,
  MIN_LIKES, MAX_LIKES, MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT,
  MIN_AVATAR, MAX_AVATAR, MIN_SENTENCES, MAX_SENTENCES
};
