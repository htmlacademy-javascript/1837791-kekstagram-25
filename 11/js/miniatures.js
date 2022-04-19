import { userCards } from './data.js';

const similarMiniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPhotos = document.querySelector('.pictures');


// функция для наполнения шаблона контентом из объекта
function createPhotoItem (photoObject) {
  const miniatureElement = similarMiniaturesTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = photoObject.url;
  miniatureElement.querySelector('.picture__likes').textContent = photoObject.likes;
  miniatureElement.querySelector('.picture__comments').textContent = photoObject.comments;
  return miniatureElement;
}

// функция для добавления готовых узлов из шаблонов в DOM
function renderUserPhoto (photoCards) {
  const similarListFragment = document.createDocumentFragment();

  for (const cards of photoCards) {
    const photoElement = createPhotoItem (cards);
    similarListFragment.appendChild(photoElement);
  }
  userPhotos.appendChild(similarListFragment);
}

renderUserPhoto(userCards);
