const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

effectsList.addEventListener('change', addImageEffect);
effectsList.addEventListener('keydown', resetEffectSettings);

function addImageEffect ({target: {value: effectName}}) {
  imagePreview.classList = '';
  imagePreview.classList.add(`effects__preview--${effectName}`);
}

export function resetEffectSettings() {
  imagePreview.classList = '';
}
