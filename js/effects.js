const slider = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const uploadForm = document.querySelector('.img-upload__form');
const noneEffect = document.querySelector('#effect-none');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

effectsList.addEventListener('change', onEffectsListChange);
effectsList.addEventListener('keydown', resetEffectSettings);

function onEffectsListChange ({target: {value: effectName}}) {
  imagePreview.classList = '';
  imagePreview.classList.add(`effects__preview--${effectName}`);
}

valueElement.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

function hideSlider () {
  slider.classList.add('hidden');
}

function showSlider () {
  slider.classList.remove('hidden');
}

if (noneEffect.checked) {
  hideSlider();
}


sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

function onUploadFormChange (evt) {
  if (evt.target.value === 'none') {
    imagePreview.style.filter = '';
    hideSlider();
  }
  if (evt.target.value === 'chrome') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    showSlider();
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `grayscale(${valueElement.value})`;
    });
  }
  if (evt.target.value === 'sepia') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    showSlider();
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `sepia(${valueElement.value})`;
    });
  }
  if (evt.target.value === 'marvin') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    showSlider();
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `invert(${valueElement.value}%)`;
    });
  }
  if (evt.target.value === 'phobos') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    showSlider();
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `blur(${valueElement.value}px)`;
    });
  }
  if (evt.target.value === 'heat') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    showSlider();
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `brightness(${valueElement.value})`;
    });
  }
}
sliderElement.noUiSlider.off('update', onUploadFormChange);
uploadForm.addEventListener('change', onUploadFormChange);

export function resetEffectSettings () {
  imagePreview.classList = '';
  imagePreview.style = '';
  slider.classList.add('hidden');
}
