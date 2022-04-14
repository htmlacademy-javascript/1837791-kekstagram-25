import { isEscapeKey } from './util.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const imageUploadButton = document.querySelector('#upload-file');
const imageEditorElement = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__form').querySelector('#upload-cancel');
const previewPhoto = uploadPhotoForm.querySelector('.img-upload__preview').querySelector('img');
const textComment = uploadPhotoForm.querySelector('.text__description');
const inputHashtags = uploadPhotoForm.querySelector('.text__hashtags');
const effectSlider =  uploadPhotoForm.querySelector('.effect-level__slider');

const openImageEditor = () => {
  imageEditorElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeImageEditor = () => {
  imageEditorElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputHashtags.value = '';
  textComment.value = '';
  previewPhoto.style.filter = '';
  previewPhoto.className = 'effects__preview--none';
  previewPhoto.dataset.filterName = '';
  effectSlider.classList.add('visually-hidden');
};

const emptyUploadButton = () => {
  imageUploadButton.value = '';
};

const onImageEscKeydown = (evt) => {
  evt.preventDefault();

  if (isEscapeKey(evt)) {
    closeImageEditor();
  }
};

const onUploadCancelClick = () => {
  closeImageEditor();
};

const onImageUpload = () => {
  openImageEditor();
  document.addEventListener('keydown', onImageEscKeydown);
  uploadCancel.addEventListener('click', onUploadCancelClick);
  emptyUploadButton ();
};

const uploadFile = () => {
  imageUploadButton.addEventListener ('change', onImageUpload);
};

export { uploadFile };


