import { isEscapeKey } from './util.js';

const imageUploadButton = document.querySelector('#upload-file');
const uploadPhotoForm = document.querySelector('.img-upload__form');
const imageEditorElement = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__form').querySelector('#upload-cancel');

const openImageEditor = () => {
  imageEditorElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeImageEditor = () => {
  imageEditorElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
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
  emptyUploadButton();
};

const validateUploadForm = () => {
  uploadPhotoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = Pristine.validate();

    if (!isValid) {
      uploadPhotoForm.setAttribute('disabled');
    }
    uploadPhotoForm.removeAttribute('disabled');
  });
};

const uploadFile = () => {
  imageUploadButton.addEventListener ('change', onImageUpload);
  validateUploadForm();
};

export { uploadFile };


