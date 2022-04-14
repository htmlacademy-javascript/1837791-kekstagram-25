import { compareElements, checkStringLength } from './util.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const inputHashtags = uploadPhotoForm.querySelector('.text__hashtags');
const MAX_LENGTH_HASHTAGS = 5;
const MAX_HASHTAG_NUMBER_ERROR = 'Максимальное количество хэштегов: ';
const NOT_UNIQUE_HASHTAG_ERROR = 'Один и тот же хэш-тег не может быть использован дважды';
const WRONG_SYMBOLS_HASHTAG_ERROR = 'Хэш-тег начинается с символа # и может состоять только из букв и чисел';

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const isHashtagValid = (hashtag) => re.test(hashtag);

const pristine = new Pristine(uploadPhotoForm, {
  classTo: 'form__element',
  errorTextParent: 'form__element',
  errorTextClass: 'form__error-text',
});

const normalizeHashtags = (value) => {
  const hashtags = value.split(' ');
  return hashtags.filter((element) => element !== '');
};

const isApropriateLength = (value) => checkStringLength(normalizeHashtags(value), MAX_LENGTH_HASHTAGS);

const checkSameElements = (value) => compareElements(normalizeHashtags(value));

const checkHashtagSymbols = (value) => (value === '') ? true : normalizeHashtags(value).every((element) => isHashtagValid(element));

pristine.addValidator(inputHashtags, isApropriateLength, MAX_HASHTAG_NUMBER_ERROR + MAX_LENGTH_HASHTAGS);

pristine.addValidator(inputHashtags, checkSameElements, NOT_UNIQUE_HASHTAG_ERROR);

pristine.addValidator(inputHashtags, checkHashtagSymbols, WRONG_SYMBOLS_HASHTAG_ERROR);

uploadPhotoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
    evt.target.reset();
  }
});
