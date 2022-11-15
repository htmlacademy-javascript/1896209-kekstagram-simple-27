import {showPhotoUploadError} from './utils.js';
import {renderPicturesList} from './random-photo-user.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((data) => {renderPicturesList(data);})
    .catch(() => {showPhotoUploadError('Ошибка загрузки изображений');});
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
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
