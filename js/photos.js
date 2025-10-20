import { getRandomInteger, getRandomArrayElement } from './utils.js';
import { COMMENTS, PHOTOS_COUNT, MIN_LIKES, MAX_LIKES } from './data.js';
import { generateComments } from './comments.js';

// Создает объект фотографии со случайными данными
const createPhotoObject = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(COMMENTS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: generateComments()
});

const generatePhotosArray = () => {
  const photos = [];

  // Создаем 25 фотографий
  for (let i = 0; i < PHOTOS_COUNT; i++) {
    photos.push(createPhotoObject(i));
  }
  return photos;
};

export { generatePhotosArray };
