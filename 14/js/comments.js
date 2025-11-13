import { getRandomInteger, getRandomArrayElement } from './utils.js';
import { NAMES, MESSAGES, MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT, MIN_AVATAR, MAX_AVATAR, MIN_SENTENCES, MAX_SENTENCES } from './data.js';

// Генерирует массив случайных комментариев
const generateComments = () => {
  const comments = [];
  const commentsCount = getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);

  for (let i = 0; i < commentsCount; i++) {
    const sentencesCount = getRandomInteger(MIN_SENTENCES, MAX_SENTENCES);
    let message = '';

    // Формирование текста комментария из случайных сообщений
    for (let j = 0; j < sentencesCount; j++) {
      message += getRandomArrayElement(MESSAGES);
      if (j < sentencesCount - 1) {
        message += ' ';
      }
    }

    // Создание объекта комментарий
    comments.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: message,
      name: getRandomArrayElement(NAMES)
    });
  }

  return comments;
};

export { generateComments };
