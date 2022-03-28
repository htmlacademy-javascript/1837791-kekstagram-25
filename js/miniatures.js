import { createCards } from './data';

const similarMiniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPhotos = document.querySelector('.pictures');

const similarMiniatures = createCards();

const similarListFragment = document.createDocumentFragment();

similarMiniatures.forEach((miniature) => {
  const miniatureElement = similarMiniaturesTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = miniature.url;
  miniatureElement.querySelector('.picture__likes').textContent = miniature.likes;
  miniatureElement.querySelector('.picture__comments').textContent = miniature.comments;
  similarListFragment.appendChild(miniatureElement);
});

userPhotos.append(similarMiniatures);
