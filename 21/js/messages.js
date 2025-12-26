import { isEscapeKey } from './util.js';
import { closeUploadForm } from './form.js';

const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');

let currentMessageElement = null;

function closeMessage() {
  if (currentMessageElement) {
    currentMessageElement.remove();
    currentMessageElement = null;
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onOverlayClick);
  }
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

function onOverlayClick(evt) {
  if (evt.target === currentMessageElement) {
    closeMessage();
  }
}

const showMessage = (templateElement, buttonClass, customTitle = null) => {
  currentMessageElement = templateElement.cloneNode(true);

  if (customTitle) {
    const titleElement = currentMessageElement.querySelector('h2');
    if (titleElement) {
      titleElement.textContent = customTitle;
    }
  }

  const buttonElement = currentMessageElement.querySelector(buttonClass);

  buttonElement.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onOverlayClick);

  document.body.appendChild(currentMessageElement);
};

const showSuccessMessage = () => {
  showMessage(successTemplateElement, '.success__button');
  closeUploadForm();
};

const showErrorMessage = (customMessage = null) => {
  showMessage(errorTemplateElement, '.error__button', customMessage);
};

export { showSuccessMessage, showErrorMessage };
