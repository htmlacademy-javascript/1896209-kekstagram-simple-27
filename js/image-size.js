const MAXVALUE = 100;
const MINVALUE = 25;
const STEP = 25;

const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

buttonSmaller.addEventListener ('click', getSmallerSize);
buttonBigger.addEventListener('click', getBiggerSize);

function getCurrentValue () {
  return parseInt(scaleValue.value, 10);
}

function getSmallerSize () {
  let newScaleValue = getCurrentValue();
  if (newScaleValue > MINVALUE) {
    newScaleValue -= STEP;
    scaleValue.value = `${newScaleValue}%`;
    imagePreview.style.transform = `scale(${newScaleValue / 100})`;
  }
}

function getBiggerSize () {
  let newScaleValue = getCurrentValue();
  if (newScaleValue < MAXVALUE) {
    newScaleValue += STEP;
    scaleValue.value = `${newScaleValue}%`;
    imagePreview.style.transform = `scale(${newScaleValue / 100})`;
  }
}

export function resetSizeSettings () {
  imagePreview.style.transform = '';
}
