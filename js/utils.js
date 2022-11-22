const ALERT_SHOW_TIME = 5000;
const isEscapeKey = (evt) => evt.key === 'Escape';

function showPhotoUploadError (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.minHeight = '80px';
  alertContainer.style.margin = '0 auto';
  alertContainer.style.padding = '40px';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {isEscapeKey, showPhotoUploadError};
