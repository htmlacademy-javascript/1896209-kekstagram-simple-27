const MAXVALUE = 100;
const MINVALUE = 25;
const STEP = 25;

const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

let newScaleValue = parseInt(scaleValue.value, 10);


function getSmallerSize () {
  if (newScaleValue > MINVALUE) {
    newScaleValue -= STEP;
    scaleValue.value = `${newScaleValue}%`;
    imagePreview.style.transform = `scale(${newScaleValue / 100})`;
  }
}

function getBiggerSize () {
  if (newScaleValue < MAXVALUE) {
    newScaleValue += STEP;
    scaleValue.value = `${newScaleValue}%`;
    imagePreview.style.transform = `scale(${newScaleValue / 100})`;
  }
}

buttonSmaller.addEventListener ('click', getSmallerSize);
buttonBigger.addEventListener('click', getBiggerSize);

