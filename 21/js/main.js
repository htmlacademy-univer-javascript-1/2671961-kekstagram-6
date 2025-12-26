import { getData } from './api.js';
import { renderThumbnails } from './thumbnails.js';
import { initFilters } from './filters.js';
import './form.js';

const picturesContainerElement = document.querySelector('.pictures');

// Функция для показа сообщения об ошибке
const showErrorMessage = (message) => {
  const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');
  const errorElement = errorTemplateElement.cloneNode(true);
  const errorTitleElement = errorElement.querySelector('.error__title');
  const errorButtonElement = errorElement.querySelector('.error__button');

  errorTitleElement.textContent = message;
  errorButtonElement.textContent = 'Попробовать снова';

  errorButtonElement.addEventListener('click', () => {
    document.location.reload();
  });

  document.body.appendChild(errorElement);
};

// Загрузка данных с сервера и отрисовка миниатюр
const loadAndRenderPhotos = async () => {
  try {
    const photosArray = await getData();
    initFilters(photosArray);
    renderThumbnails(photosArray, picturesContainerElement);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadAndRenderPhotos();
});
