const slider = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsChecked = document.querySelector('.effects__radio');

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


sliderElement.noUiSlider.on('update', () => {
  const sliderValue = sliderElement.noUiSlider.get();
  valueElement.value = sliderValue;
});

function updateSlider () {
  effectsChecked.addEventListener('change', (evt) => {
    if (evt.target.value === 'chrome') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
        filterClass: 'chrome',
        filter: 'grayscale',
        unit: ''
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
        filterClass: 'sepia',
        filter: 'sepia',
        unit: ''
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
        filterClass: 'marvin',
        filter: 'invert',
        unit: '%'
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
        filterClass: 'phobos',
        filter: ' blur',
        unit: 'px'
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
        filterClass: 'heat',
        filter: 'brightness',
        unit: ''
      });
    } else {
      slider.setAttribute('hidden', true);
    }
  });
}


export {updateSlider};
