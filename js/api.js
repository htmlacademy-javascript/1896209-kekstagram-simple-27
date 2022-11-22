import {showPhotoUploadError} from './utils.js';

const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

function getData (onSuccess) {
  fetch(`${BASE_URL}/data`)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {showPhotoUploadError('Ошибка загрузки изображений');});
}

function sendData (onSuccess, body) {
  fetch(
    BASE_URL,
    {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      else {
        showPhotoUploadError('Ошибка загрузки изображений');
        // eslint-disable-next-line no-console
        console.log('mew');
      }
    })
    .catch(() => {
      showPhotoUploadError('Ошибка загрузки изображений');
    });
}

export {getData, sendData};
