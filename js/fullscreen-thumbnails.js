import { isEscapeKey } from './utils.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

// Отрисовывает комментарии к фотографии
const renderComments = (comments) => {
  socialCommentsElement.innerHTML = '';

  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    commentElement.innerHTML = `
      <img
        class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35" height="35">
      <p class="social__text">${comment.message}</p>
    `;

    commentsFragment.appendChild(commentElement);
  });

  socialCommentsElement.appendChild(commentsFragment);
};

// Закрывает полноразмерный просмотр
const closeFullscreen = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

// Обработчик нажатия клавиши Esc
function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullscreen();
  }
}

// Открывает полноразмерный просмотр фотографии
const openFullscreen = (photo) => {
  bigPictureImageElement.src = photo.url;
  bigPictureImageElement.alt = photo.description;
  likesCountElement.textContent = photo.likes;
  commentsCountElement.textContent = photo.comments.length;
  socialCaptionElement.textContent = photo.description;

  renderComments(photo.comments);

  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');

  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

closeButtonElement.addEventListener('click', () => {
  closeFullscreen();
});

export { openFullscreen };
