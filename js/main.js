import { generatePhotosArray } from './photos.js';
import { renderThumbnails } from './thumbnails.js';
import './form.js';

const photosArray = generatePhotosArray();

// Отрисовывает миниатюры после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  const picturesContainerElement = document.querySelector('.pictures');
  renderThumbnails(photosArray, picturesContainerElement);
});

export { photosArray };
