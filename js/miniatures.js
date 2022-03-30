import { userCards } from './data';

const similarMiniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPhotos = document.querySelector('.pictures');

const similarListFragment = document.createDocumentFragment();

// функция для наполнения шаблона контентом из объекта
function getPhotoItem (photoObject) {
  const miniatureElement = similarMiniaturesTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = photoObject.url;
  miniatureElement.querySelector('.picture__likes').textContent = photoObject.likes;
  miniatureElement.querySelector('.picture__comments').textContent = photoObject.comments;
  return miniatureElement;
}

// функция для добавления готовых узлов из шаблонов в DOM
function addPhotoItem (photoCards) {
  for (let i = 0; i < photoCards.length; i++) {
    const photoElement = getPhotoItem (photoCards[i]);
    similarListFragment.appendChild(photoElement);
  }
  userPhotos.appendChild(similarListFragment);
}

addPhotoItem(userCards);
