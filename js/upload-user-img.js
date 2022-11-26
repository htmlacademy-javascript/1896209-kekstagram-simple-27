import {isEscapeKey} from './utils.js';
import {resetEffectSettings} from './effects.js';
import {resetSizeSettings} from './size.js';
import {sendData} from './api.js';
import {alertSuccess, alertError} from './alert.js';

const uploadForm = document.querySelector('.img-upload__form');
const userImgModalElement = uploadForm.querySelector('.img-upload__overlay');
const {body} = document;
const userImgModalOpenElement = uploadForm.querySelector('#upload-file');
const submitButton = uploadForm.querySelector('#upload-submit');

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadForm.reset();
  }
}

userImgModalOpenElement.addEventListener('change', openUserModal);
uploadForm.addEventListener('reset', closeUserModal);

function openUserModal () {
  userImgModalElement.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
  userImgModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  resetEffectSettings();
  resetSizeSettings();
  document.removeEventListener('keydown', onDocumentKeydown);
}

function blockSubmitButton () {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
}
function unblockSubmitButton () {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
}

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  blockSubmitButton();
  sendData(
    () => {
      alertSuccess();
      unblockSubmitButton();
      uploadForm.reset();
    },
    () => {
      alertError();
      unblockSubmitButton();
      document.removeEventListener('keydown', onDocumentKeydown);
    },
    new FormData(uploadForm),
  );
});
