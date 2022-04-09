import { userCards } from './data.js';
import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector ('.big-picture');
const usersPhotoList = document.querySelector('.pictures');
const userPhotoItems = Array.from(usersPhotoList.querySelectorAll('.picture'));
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCounter = bigPicture.querySelector('.comments-count');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const buttonCloseBigPicture = bigPicture.querySelector('.big-picture__cancel');

const commentCounter = bigPicture.querySelector('.social__comment-count');
const commentLoader= bigPicture.querySelector('.comments-loader');

const createComment = (item) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const newCommentImg = document.createElement('img');
  newCommentImg.classList.add('social__picture');
  newCommentImg.src = item.avatar;
  newCommentImg.alt = item.name;
  newCommentImg.width = '35';
  newCommentImg.height = '35';
  newComment.append(newCommentImg);

  const newCommentText = document.createElement('p');
  newCommentText.textContent = item.message;
  newComment.append(newCommentText);

  commentsList.append(newComment);
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};


const getBigPicture = (count) => {
  openModal();

  commentCounter.classList.add('hidden'); //Временно
  commentLoader.classList.add('hidden'); //Временно

  const photoData = userCards[count];

  bigPictureImg.src = photoData.url;
  bigPictureLikes.textContent = photoData.likes;
  bigPictureCommentsCounter.textContent = photoData.comments.length;
  bigPictureCaption.textContent = photoData.description;

  commentsList.innerHTML = '';

  photoData.comments.forEach(createComment);
};


userPhotoItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    getBigPicture(i);
  });
});

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
});

buttonCloseBigPicture.addEventListener('click', closeModal());
