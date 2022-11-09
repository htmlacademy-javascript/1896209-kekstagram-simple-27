import { isEscapeKey } from './utils.js';
import { resetEffectSettings } from './image-effects.js';
import { resetSizeSettings } from './image-size.js';

const uploadForm = document.querySelector('.img-upload__form');
const userImgModalElement = uploadForm.querySelector('.img-upload__overlay');
const {body} = document;
const userImgModalOpenElement = uploadForm.querySelector('#upload-file');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadForm.reset();
  }
};

function openUserModal () {
  userImgModalElement.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  userImgModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  resetEffectSettings();
  resetSizeSettings();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

userImgModalOpenElement.addEventListener('change', openUserModal);

uploadForm.addEventListener('reset', closeUserModal);
