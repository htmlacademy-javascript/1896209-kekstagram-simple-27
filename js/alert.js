import {isEscapeKey} from './utils.js';

const alertSuccess = () => {
  const pageBody = document.querySelector('body');
  const successContent = document.querySelector('#success').content;
  const successElement = successContent.querySelector('.success');

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
};

const alertError = () => {
  const pageBody = document.querySelector('body');
  const errorContent = document.querySelector('#error').content;
  const errorElement = errorContent.querySelector('.error');

  const newErrorElement = pageBody.appendChild(errorElement);

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      newErrorElement.remove();
    }
  });

  document.addEventListener('click', () => {
    newErrorElement.remove();
  });
};

export {alertSuccess, alertError};
