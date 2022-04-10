import { userCards } from './data.js';
import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector ('.big-picture');
const usersPhotoList = document.querySelector('.pictures');
const userPhotoItems = Array.from(usersPhotoList.querySelectorAll('.picture'));
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCounter = bigPicture.querySelector('.comments-count');
const bigPictureCommentsShowed = bigPicture.querySelector('.comments-count__showed');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const buttonCloseBigPicture = bigPicture.querySelector('.big-picture__cancel');
const buttonShowMoreComments = bigPicture.querySelector('.social__comments-loader');
const NUMBER_OF_COMMENTS = 5;
let renderedCommentsList;
let hiddenCommentaryList;


const createComment = (item, index) => {
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
  if (index >= NUMBER_OF_COMMENTS) {
    newComment.classList.add('hidden');
  }
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};


const renderBigPicture = (count) => {
  openModal();

  const photoData = userCards[count];

  bigPictureImg.src = photoData.url;
  bigPictureLikes.textContent = photoData.likes;
  bigPictureCommentsCounter.textContent = photoData.comments.length;
  bigPictureCaption.textContent = photoData.description;

  commentsList.innerHTML = '';

  photoData.comments.forEach(createComment);
  renderedCommentsList = bigPicture.querySelectorAll('.social__comment');
};

buttonShowMoreComments.addEventListener('click', () => {
  let hiddenComments = Array.from(bigPicture.querySelectorAll('.social__comment.hidden'));

  if (hiddenComments.length <= NUMBER_OF_COMMENTS) {
    buttonShowMoreComments.classList.add('hidden');
    bigPictureCommentsShowed.textContent = renderedCommentsList.length;
  } else {
    hiddenComments = hiddenComments.slice(0, NUMBER_OF_COMMENTS);
    bigPictureCommentsShowed.textContent = parseInt(bigPictureCommentsShowed.textContent, 10) + NUMBER_OF_COMMENTS;
  }

  hiddenComments.forEach((comment) => {
    comment.classList.remove('hidden');
  });
});

userPhotoItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    renderBigPicture(i);
    bigPictureCommentsShowed.textContent = renderedCommentsList.length - hiddenCommentaryList.length;

  });
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
});

buttonCloseBigPicture.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});
