import {getRandomInRange, checkStringLength} from './util.js' ;

const COMMENT_MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENT_NAMES = ['Василий', 'Иван', 'Егор', 'Игорь', 'Тарас', 'Марк'];

const PHOTO_DESCRIPTIONS = ['Овощные культуры','Ягоды','Стручковые','Бобовые','Грибы'];
const PHOTO_MAX_LIKES = 200;
const PHOTO_MIN_LIKES = 15;
const AVATARS_TOTAL = 6;
const MAX_CARDS = 25;
const EXAMPLE_NUMBER = 10;

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInRange(1, AVATARS_TOTAL)}.svg`,
  message: COMMENT_MESSAGES[getRandomInRange(0, COMMENT_MESSAGES.length - 1)],
  name: COMMENT_NAMES[getRandomInRange(0, COMMENT_NAMES.length - 1)],
});

const createPhotoBlock = (id) => ({
  id,
  url: `photos/${getRandomInRange(1, 25)}.jpg`,
  description: PHOTO_DESCRIPTIONS[getRandomInRange(0, PHOTO_DESCRIPTIONS.length - 1)],
  likes: getRandomInRange(PHOTO_MIN_LIKES, PHOTO_MAX_LIKES),
  comments: Array.from({length: getRandomInRange(2, 14)}, (_, index) => createComment(index)),
});

function createCards(amount){
  const arr = [];
  for (let i = 0; i <= amount; i++) {
    arr.push( createPhotoBlock(i) );
  }
  return arr;
}

checkStringLength('similarDescription', EXAMPLE_NUMBER); //что бы eslint не ругался
const userCards = createCards(MAX_CARDS);

export { userCards };
