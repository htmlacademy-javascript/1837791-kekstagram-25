import { isEscapeKey } from './util.js';

const NUMBER_OF_COMMENTS = 5;

const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const usersPhotoList = document.querySelector('.pictures');

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCounter = bigPicture.querySelector('.comments-count');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const buttonCloseBigPicture = bigPicture.querySelector('.big-picture__cancel');

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onUserPhotoEscKeydown);
};

const onUserPhotoEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    closeModal();
  }
};

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

  if (index >= NUMBER_OF_COMMENTS) {
    newComment.classList.add('hidden');
  }

  commentsList.append(newComment);
};

const renderBigPicture = (photoData) => {
  const userPhotoElement = userPhotoTemplate.cloneNode(true);
  userPhotoElement.querySelector('.picture__img').src = photoData.url;
  userPhotoElement.querySelector('.picture__likes').textContent = photoData.likes;
  userPhotoElement.querySelector('.picture__comments').textContent = photoData.comments.length;

  usersPhotoList.append(userPhotoElement);

  userPhotoElement.addEventListener('click', () => {
    openModal();

    bigPictureImg.src = photoData.url;
    bigPictureLikes.textContent = photoData.likes;
    bigPictureCommentsCounter.textContent = photoData.comments.length;
    bigPictureCaption.textContent = photoData.description;

    commentsList.innerHTML = '';

    const comments = photoData.comments;

    const shownNumberComments = bigPicture.querySelector('.comments-number');
    const buttonShowMoreComments = bigPicture.querySelector('.social__comments-loader');

    buttonShowMoreComments.classList.remove('hidden');
    shownNumberComments.textContent = NUMBER_OF_COMMENTS;

    if (comments.length <= NUMBER_OF_COMMENTS) {
      buttonShowMoreComments.classList.add('hidden');
      shownNumberComments.textContent = comments.length;
    }

    comments.forEach(createComment);

    buttonShowMoreComments.addEventListener('click', () => {
      let hiddenComments = Array.from(bigPicture.querySelectorAll('.social__comment.hidden'));

      if (hiddenComments.length <= NUMBER_OF_COMMENTS) {
        buttonShowMoreComments.classList.add('hidden');
        shownNumberComments.textContent = comments.length;
      } else {
        hiddenComments = hiddenComments.slice(0, NUMBER_OF_COMMENTS);
        shownNumberComments.textContent = parseInt(shownNumberComments.textContent, 10) + NUMBER_OF_COMMENTS;
      }

      hiddenComments.forEach((comment) => {
        comment.classList.remove('hidden');
      });
    });

    document.addEventListener('keydown', onUserPhotoEscKeydown);
  });
};

const renderBigPictureElements = (similarPhotoData) => {
  similarPhotoData.forEach((photoData) => {
    renderBigPicture(photoData);
  });
};

buttonCloseBigPicture.addEventListener('click', closeModal);

export { usersPhotoList, renderBigPictureElements };
