import {isEscapeKey} from './util';

const imageUploadButton = document.querySelector('#upload-file');
const uploadPhotoForm = document.querySelector('.img-upload__form');
const imageEditorInterface = document.querySelector('.img-upload__overlay');
const previewPhoto = uploadPhotoForm.querySelector('.img-upload__preview').querySelector('img');
const body = document.querySelector('body');
const buttonCancel = uploadPhotoForm.querySelector('.img-upload__cancel');


const openFilter = () => {
  imageEditorInterface.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeFilter = () => {
  imageEditorInterface.classList.add('hidden');
  body.classList.remove('modal-open');
};

imageUploadButton.addEventListener('change', () => {
  if (imageUploadButton.value.length !== 0) {
    openFilter();
  }
  //источник: https://ru.stackoverflow.com/questions/1026600/%D0%BA%D0%B0%D0%BA-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%B8%D1%82%D1%8C-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D1%83-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-input;
  previewPhoto.src = URL.createObjectURL(imageUploadButton.files[0]);
});

buttonCancel.addEventListener(('click'), () => {
  closeFilter();
  imageUploadButton.value = '';
});

document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    closeFilter();
    imageUploadButton.value = '';
  }
});

uploadPhotoForm.addEventListener('submit', (evt) => {
  const isValid = Pristine.validate();

  if (!isValid) {
    evt.preventDefault();
  }
});
