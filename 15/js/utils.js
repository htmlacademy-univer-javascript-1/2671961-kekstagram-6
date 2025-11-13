// Генерирует случайное число (целое) в заданном диапазоне
const getRandomInteger = (minValue, maxValue) => {
  const min = Math.ceil(Math.min(minValue, maxValue));
  const max = Math.floor(Math.max(minValue, maxValue));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Возвращает случайный элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Проверяет, является ли клавиша Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, getRandomArrayElement, isEscapeKey };
