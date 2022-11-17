import {showPhotoUploadError} from './utils.js';

const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(`${BASE_URL}/data`)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {showPhotoUploadError('Ошибка загрузки изображений');});
};

const sendData = (onSuccess, onFail, body) => {
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
        onFail(showPhotoUploadError('Ошибка загрузки изображений'));
      }
    })
    .catch(() => {
      onFail(showPhotoUploadError('Ошибка загрузки изображений'));
    });
};

export {getData, sendData};
