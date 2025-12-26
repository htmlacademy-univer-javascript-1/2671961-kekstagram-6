import { isEscapeKey } from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

// Переменные для пагинации
let currentComments = [];
let commentsShown = 0;
const COMMENTS_PER_PORTION = 5;

// Отрисовывает часть комментариев
const renderCommentsPortion = () => {
  const commentsToShow = currentComments.slice(commentsShown, commentsShown + COMMENTS_PER_PORTION);

  const commentsFragmentElement = document.createDocumentFragment();

  commentsToShow.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    // Создает изображение аватарки
    const avatarImageElement = document.createElement('img');
    avatarImageElement.classList.add('social__picture');
    avatarImageElement.src = comment.avatar;
    avatarImageElement.alt = comment.name;
    avatarImageElement.width = 35;
    avatarImageElement.height = 35;

    // Создает текст комментария
    const commentTextElement = document.createElement('p');
    commentTextElement.classList.add('social__text');
    commentTextElement.textContent = comment.message;

    // Добавляет элементы в комментарий
    commentElement.append(avatarImageElement, commentTextElement);
    commentsFragmentElement.appendChild(commentElement);
  });

  socialCommentsElement.appendChild(commentsFragmentElement);

  // Счетчик показанных комментариев
  commentsShown += commentsToShow.length;
  const commentsCountSpanElement = commentCountElement.querySelector('.comments-count');
  commentsCountSpanElement.textContent = currentComments.length;
  commentCountElement.firstChild.textContent = `${commentsShown} из `;

  if (commentsShown >= currentComments.length) {
    commentsLoaderElement.classList.add('hidden');
  }
};

// Обработчик клика по кнопке "Загрузить ещё"
const onCommentsLoaderClick = () => {
  renderCommentsPortion();
};

// Закрывает полноразмерный просмотр
const closeFullscreen = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

  // Сбрасывает состояние пагинации при закрытии
  commentsShown = 0;
  currentComments = [];
  commentsLoaderElement.classList.remove('hidden');
  commentsLoaderElement.removeEventListener('click', onCommentsLoaderClick);
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

  currentComments = photo.comments;
  commentsShown = 0;

  socialCommentsElement.innerHTML = '';

  commentCountElement.classList.remove('hidden');
  commentsLoaderElement.classList.remove('hidden');

  renderCommentsPortion();

  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

// Обработчик закрытия по клику на крестик
closeButtonElement.addEventListener('click', () => {
  closeFullscreen();
});

export { openFullscreen };
