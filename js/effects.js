const slider = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const uploadForm = document.querySelector('.img-upload__form');
const noneEffect = document.querySelector('#effect-none');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

effectsList.addEventListener('change', addImageEffect);
effectsList.addEventListener('keydown', resetEffectSettings);

function addImageEffect ({target: {value: effectName}}) {
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

uploadForm.addEventListener('change', (evt) => {
  if (evt.target.checked) {
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
        imagePreview.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
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
        imagePreview.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;
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
        imagePreview.style.filter = `invert(${sliderElement.noUiSlider.get()}%)`;
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
        imagePreview.style.filter = `blur(${sliderElement.noUiSlider.get()}px)`;
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
        imagePreview.style.filter = `brightness(${sliderElement.noUiSlider.get()})`;
      });
    }
  }
});

export function resetEffectSettings () {
  imagePreview.classList = '';
  slider.classList.add('hidden');
}
