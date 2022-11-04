const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

function addImageEffect ({target: {value}}) {
  switch(value) {
    case 'none':
      imagePreview.classList = '';
      imagePreview.classList.add('effects__preview--none');
      break;
    case 'chrome':
      imagePreview.classList = '';
      imagePreview.classList.add('effects__preview--chrome');
      break;
    case 'sepia':
      imagePreview.classList = '';
      imagePreview.classList.add('effects__preview--sepia');
      break;
    case 'marvin':
      imagePreview.classList = '';
      imagePreview.classList.add('effects__preview--marvin');
      break;
    case 'phobos':
      imagePreview.classList = '';
      imagePreview.classList.add('effects__preview--phobos');
      break;
    case 'heat':
      imagePreview.classList = '';
      imagePreview.classList.add('effects__preview--heat');
      break;
    default:
  }
}

effectsList.addEventListener('change', addImageEffect);
effectsList.addEventListener('keydown', addImageEffect);
