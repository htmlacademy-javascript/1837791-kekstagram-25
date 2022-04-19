import { getData } from './api.js';
import './miniatures.js';
import { setUserFormSubmit } from './form.js';
import './validation.js';
import { renderBigPictureElements } from './bigpicture.js';
import './effects.js';
import './scale-uploaded-photo.js';
import { closeFilterModal } from './upload-photo-form.js';
import { showFilters, hideFilters, initFilters, filterPhoto, showGetDataMessageError } from './filters.js';

getData(
  'https://25.javascript.pages.academy/kekstagram/data',
  (photos) => {
    renderBigPictureElements(photos);
    showFilters();
    initFilters();
    filterPhoto();
  },
  () => {
    showGetDataMessageError();
    hideFilters();
  }
);

setUserFormSubmit(closeFilterModal);
