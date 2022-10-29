import './random-photo-user.js';
import { isEscapeKey } from './utils.js';

const userImgModalElement = document.querySelector('.img-upload__overlay');
const userImgModal = document.querySelector('body');
const userImgModalOpenElement = userImgModal.querySelector('#upload-file');
const userImgModalCloseElement = userImgModal.querySelector('.img-upload__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userImgModalElement.classList.remove('hidden');
  userImgModal.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  userImgModalElement.classList.add('hidden');
  userImgModal.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

userImgModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userImgModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});
