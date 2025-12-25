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

const showAlert = (message) => {
  const alertContainerElement = document.createElement('div');
  alertContainerElement.style.zIndex = '100';
  alertContainerElement.style.position = 'fixed';
  alertContainerElement.style.left = '0';
  alertContainerElement.style.top = '0';
  alertContainerElement.style.right = '0';
  alertContainerElement.style.padding = '10px 3px';
  alertContainerElement.style.fontSize = '30px';
  alertContainerElement.style.textAlign = 'center';
  alertContainerElement.style.backgroundColor = 'red';
  alertContainerElement.textContent = message;

  document.body.append(alertContainerElement);

  setTimeout(() => {
    alertContainerElement.remove();
  }, 5000);
};

export { getRandomInteger, getRandomArrayElement, isEscapeKey, showAlert };
