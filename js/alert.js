import {isEscapeKey} from './utils.js';

const pageBody = document.querySelector('body');
const successContent = document.querySelector('#success').content;
const successElement = successContent.querySelector('.success');
const errorContent = document.querySelector('#error').content;
const errorElement = errorContent.querySelector('.error');

function alertSuccess () {
  const cloneSuccessElement = successElement.cloneNode(true);
  const newSuccessElement = pageBody.appendChild(cloneSuccessElement);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newSuccessElement.remove();
    }
  });

  document.addEventListener('click', () => {
    newSuccessElement.remove();
  });
}

function alertError () {
  const cloneErrorElement = errorElement.cloneNode(true);
  const newErrorElement = pageBody.appendChild(cloneErrorElement);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newErrorElement.remove();
    }
  });

  document.addEventListener('click', () => {
    newErrorElement.remove();
  });
}

export {alertSuccess, alertError};
