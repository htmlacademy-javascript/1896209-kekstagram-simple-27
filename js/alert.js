// // const {body} = document;
// const page = document.querySelector('body');
// const successTemplate = document.querySelector('#success')
//   .content
//   .querySelector('.success');
// const successElement = successTemplate.querySelector('.success');
// const newSuccessElement = page.appendChild(successElement);

// document.addEventListener('keydown', (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     newSuccessElement.remove();
//   }
// });

// document.addEventListener('click', () => {
//   newSuccessElement.remove();
// });
import {isEscapeKey} from './utils.js';

const alertSuccess = () => {
  const pageBody = document.querySelector('body');
  const successContent = document.querySelector('#success').content;
  const successElement = successContent.querySelector('.success');

  const newSuccessElement = pageBody.appendChild(successElement);

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

// document.addEventListener('keydown', onEscapeKeydown(newSuccessElement));
// const errorTemplate = document.querySelector('#error')
//   .content
//   .querySelector('.error');

// function alertSuccess () {
//   page.appendChild(successElement);
// }

// function alertError () {
//   const showErrorTemplate = document.createDocumentFragment();
//   const errorElement = errorTemplate.cloneNode(true);
//   showErrorTemplate.appendChild(errorElement);
//   document.appendChild(showErrorTemplate);
// }

export {alertSuccess, alertError};
