const uploadPhotoForm = document.querySelector('.img-upload__form');
const scaleValue = uploadPhotoForm.querySelector('.scale__control--value');
const buttonIncreaseScale = uploadPhotoForm.querySelector('.scale__control--bigger');
const buttonDecreaseScale = uploadPhotoForm.querySelector('.scale__control--smaller');
const previewPhoto = uploadPhotoForm.querySelector('.img-upload__preview').querySelector('img');
const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;


const changeScale = (number) => {
  previewPhoto.style.transform = `scale(${number/MAX_SCALE})`;
};

buttonIncreaseScale.disabled = true;

buttonIncreaseScale.addEventListener('click', () => {
  let numberScaleValue = parseInt(scaleValue.value.match(/\d+/), 10);
  numberScaleValue += STEP_SCALE;
  scaleValue.value =  `${numberScaleValue}%`;

  if (numberScaleValue === MAX_SCALE) {
    buttonIncreaseScale.disabled = true;
  }
  buttonDecreaseScale.disabled = false;

  changeScale(numberScaleValue);
});

buttonDecreaseScale.addEventListener('click', () => {
  let numberScaleValue = parseInt(scaleValue.value.match(/\d+/), 10);
  numberScaleValue -= STEP_SCALE;
  scaleValue.value =  `${numberScaleValue}%`;

  buttonIncreaseScale.disabled = false;
  if (numberScaleValue === MIN_SCALE) {
    buttonDecreaseScale.disabled = true;
  }

  changeScale(numberScaleValue);
});
