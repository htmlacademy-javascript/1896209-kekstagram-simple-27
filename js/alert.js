import {isEscapeKey} from './utils.js';

const pageBody = document.querySelector('body');
const successContent = document.querySelector('#success').content;
const successElement = successContent.querySelector('.success');
const errorContent = document.querySelector('#error').content;
const errorElement = errorContent.querySelector('.error');

function alertSuccess () {
  const cloneSuccessElement = successElement.cloneNode(true);
  const newSuccessElement = pageBody.appendChild(cloneSuccessElement);

  function removeEventSuccess () {
    document.removeEventListener('keydown', onDocumentSuccessKeydown);
    document.removeEventListener('click', deleteSuccessAlert);
  }

  function deleteSuccessAlert () {
    newSuccessElement.remove();
    removeEventSuccess();
  }

  function onDocumentSuccessKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newSuccessElement.remove();
      removeEventSuccess();
    }
  }

  document.addEventListener('keydown', onDocumentSuccessKeydown);
  document.addEventListener('click', deleteSuccessAlert);
}

function alertError () {
  const cloneErrorElement = errorElement.cloneNode(true);
  const newErrorElement = pageBody.appendChild(cloneErrorElement);

  function removeEventError () {
    document.removeEventListener('keydown', onDocumentErrorEscKeydown);
    document.removeEventListener('click', deleteErrorAlert);
  }

  function deleteErrorAlert () {
    newErrorElement.remove();
    removeEventError();
  }

  function onDocumentErrorEscKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newErrorElement.remove();
      removeEventError();
    }
  }

  document.addEventListener('keydown', onDocumentErrorEscKeydown);
  document.addEventListener('click', deleteErrorAlert);
}

export {alertSuccess, alertError};
