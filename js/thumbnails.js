// Функция для создания DOM-элемента миниатюры
const createThumbnail = (photo) => {
  // Клонирует шаблон миниатюры из HTML
  const templateElement = document.querySelector('#picture').content.querySelector('.picture');
  const thumbnailElement = templateElement.cloneNode(true);

  // Заполняет данные изображения
  const imageElement = thumbnailElement.querySelector('.picture__img');
  imageElement.src = photo.url;
  imageElement.alt = photo.description;

  // Заполняет счетчики лайков и комментариев
  const likesElement = thumbnailElement.querySelector('.picture__likes');
  likesElement.textContent = photo.likes;

  const commentsElement = thumbnailElement.querySelector('.picture__comments');
  commentsElement.textContent = photo.comments.length;

  thumbnailElement.dataset.photoId = photo.id;

  return thumbnailElement;
};

// Отрисовывает миниатюры фотографий в контейнере
const renderThumbnails = (picturesList, picturesContainer) => {
  const fragmentElement = document.createDocumentFragment();

  picturesList.forEach((pictureItem) => {
    const thumbnailElement = createThumbnail(pictureItem);
    fragmentElement.appendChild(thumbnailElement);
  });

  picturesContainer.appendChild(fragmentElement);
};

export { renderThumbnails };
