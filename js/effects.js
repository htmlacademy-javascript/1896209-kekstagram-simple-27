const uploadForm = document.querySelector('.img-upload__form');
const effectsList = uploadForm.querySelector('.effects__list');
const valueElement = uploadForm.querySelector('.effect-level__value');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const sliderWrapper = uploadForm.querySelector('.effect-level');
const imagePreview = document.querySelector('.img-upload__preview img');

const FROM_ZERO_TO_ONE = createSliderOption(0, 1, 0.1);
const FROM_ZERO_TO_HUNDRED = createSliderOption(0, 100, 1);

const SLIDER_OPTIONS = {
  none : {
    slider: FROM_ZERO_TO_HUNDRED,
  },
  chrome: {
    slider: FROM_ZERO_TO_ONE,
    filter: 'grayscale',
    unit: '',
  },
  sepia: {
    slider: FROM_ZERO_TO_ONE,
    filter: 'sepia',
    unit: '',
  },
  marvin: {
    slider: FROM_ZERO_TO_HUNDRED,
    filter: 'invert',
    unit: '%',
  },
  phobos: {
    slider: createSliderOption(0, 3, 0.1),
    filter: 'blur',
    unit: 'px',
  },
  heat: {
    slider: createSliderOption(1, 3, 0.1),
    filter: 'brightness',
    unit: '',
  },
};

effectsList.addEventListener('change', onEffectsListChange);
effectsList.addEventListener('keydown', resetEffectSettings);

sliderWrapper.hidden = true;

noUiSlider.create(sliderElement, {
  ...SLIDER_OPTIONS['none'].slider,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  const currentValue = sliderElement.noUiSlider.get();
  const currentEffect = uploadForm.effect.value;
  const { filter, unit } = SLIDER_OPTIONS[currentEffect];

  if (filter) {
    imagePreview.style.filter = `${filter}(${currentValue}${unit})`;
  } else {
    imagePreview.style.removeProperty('filter');
  }

  valueElement.value = currentValue;
});

function createSliderOption (min = 0, max = 100, step = 1) {
  return {
    range: {min, max},
    step,
    start: max,
  };
}

function onEffectsListChange () {
  const effectName = uploadForm.effect.value;
  imagePreview.classList = '';
  imagePreview.classList.add(`effects__preview--${effectName}`);

  sliderWrapper.hidden = effectName === 'none';

  const sliderOption = SLIDER_OPTIONS[effectName].slider;
  sliderElement.noUiSlider.updateOptions(sliderOption);
}

export function resetEffectSettings () {
  uploadForm.effect.value = 'none';
  onEffectsListChange();
}
