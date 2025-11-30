import { isEscapeKey } from './utils.js';

// Элементы формы
const uploadFormElement = document.querySelector('.img-upload__form');
const uploadInputElement = uploadFormElement.querySelector('#upload-file');
const uploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadCancelElement = uploadFormElement.querySelector('#upload-cancel');
const hashtagsInputElement = uploadFormElement.querySelector('.text__hashtags');
const commentInputElement = uploadFormElement.querySelector('.text__description');

const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;

// Функция для проверки хэш-тегов
const validateHashtags = (value) => {
  if (value.trim() === '') {
    return true;
  }

  const hashtags = value.trim().split(/\s+/).filter(Boolean);

  // Проверка количества хэш-тегов
  if (hashtags.length > 5) {
    return false;
  }

  // Проверка каждого хэш-тега
  for (let i = 0; i < hashtags.length; i++) {
    const hashtag = hashtags[i];

    // Проверка формата
    if (!HASHTAG_REGEX.test(hashtag)) {
      return false;
    }

    // Проверка на дубликаты (без учета регистра)
    for (let j = i + 1; j < hashtags.length; j++) {
      if (hashtag.toLowerCase() === hashtags[j].toLowerCase()) {
        return false;
      }
    }
  }

  return true;
};

// Функция для получения детального сообщения об ошибке
const getHashtagErrorMessage = (value) => {
  if (value.trim() === '') {
    return '';
  }

  const hashtags = value.trim().split(/\s+/).filter(Boolean);

  // Проверка количества хэш-тегов
  if (hashtags.length > 5) {
    return 'Не более 5 хэш-тегов';
  }

  // Проверка на дубликаты
  const lowerCaseHashtags = hashtags.map(tag => tag.toLowerCase());
  const uniqueHashtags = new Set(lowerCaseHashtags);
  if (uniqueHashtags.size !== hashtags.length) {
    return 'Хэш-теги не должны повторяться';
  }

  // Проверка формата
  for (const hashtag of hashtags) {
    if (!HASHTAG_REGEX.test(hashtag)) {
      return 'Неверный формат хэш-тега';
    }
  }

  return '';
};

// Функция для проверки комментария
const validateComment = (value) => value.length <= 140;

// Валидаторы к Pristine с детальными сообщениями
pristine.addValidator(
  hashtagsInputElement,
  validateHashtags,
  getHashtagErrorMessage
);

pristine.addValidator(
  commentInputElement,
  validateComment,
  'Комментарий не может быть длиннее 140 символов'
);

// Открытие формы
const openUploadForm = () => {
  uploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

// Закрытие формы
const closeUploadForm = () => {
  uploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

  // Сброс формы и значений
  uploadFormElement.reset();
  pristine.reset();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    // Форма не закрывается, если фокус в полях ввода
    if (document.activeElement === hashtagsInputElement || document.activeElement === commentInputElement) {
      return;
    }
    evt.preventDefault();
    closeUploadForm();
  }
}

// Обработчик выбора файла
const onFileInputChange = () => {
  openUploadForm();
};

// Обработчик отправки формы
const onFormSubmit = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

uploadInputElement.addEventListener('change', onFileInputChange);
uploadCancelElement.addEventListener('click', closeUploadForm);
uploadFormElement.addEventListener('submit', onFormSubmit);

// Нет закрытия формы по Esc при фокусе в полях ввода
[hashtagsInputElement, commentInputElement].forEach((element) => {
  element.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
});

export { closeUploadForm };
