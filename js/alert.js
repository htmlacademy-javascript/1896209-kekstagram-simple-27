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
    document.removeEventListener('keydown', onAlertSuccessEscKeydown);
    document.removeEventListener('click', deleteSuccessAlert);
  }

  function deleteSuccessAlert () {
    newSuccessElement.remove();
    removeEventSuccess();
  }

  function onAlertSuccessEscKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newSuccessElement.remove();
      removeEventSuccess();
    }
  }

  document.addEventListener('keydown', onAlertSuccessEscKeydown);
  document.addEventListener('click', deleteSuccessAlert);
}

function alertError () {
  const cloneErrorElement = errorElement.cloneNode(true);
  const newErrorElement = pageBody.appendChild(cloneErrorElement);

  function removeEventError () {
    document.removeEventListener('keydown', onAlertErrorEscKeydown);
    document.removeEventListener('click', deleteErrorAlert);
  }

  function deleteErrorAlert () {
    newErrorElement.remove();
    removeEventError();
  }

  function onAlertErrorEscKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newErrorElement.remove();
      removeEventError();
    }
  }

  document.addEventListener('keydown', onAlertErrorEscKeydown);
  document.addEventListener('click', deleteErrorAlert);
}

export {alertSuccess, alertError};
