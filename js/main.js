const COMMENTS_MESSAGE = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENTS_NAME = ['Василий', 'Иван', 'Егор', 'Игорь', 'Тарас', 'Марк'];

const PHOTOS_DESCRIPTION = ['Овощные культуры','Ягоды','Стручковые','Бобовые','Грибы'];
const PHOTO_MAX_LIKES = 200;
const PHOTO_MIN_LIKES = 15;
const AVATARS_TOTAL = 6;
const MAX_CARDS = 25;
const EXAMPLE_NUMBER = 10;

// Новый код
const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInRange(0, AVATARS_TOTAL)}.svg`,
  message: COMMENTS_MESSAGE[getRandomInRange(0, COMMENTS_MESSAGE.length - 1)],
  name: COMMENTS_NAME[getRandomInRange(0, COMMENTS_NAME.length - 1)],
});

const createPhotoBlock = (id) => ({
  id,
  url: `photos/${getRandomInRange(1, 25)}.jpg`,
  description: PHOTOS_DESCRIPTION[getRandomInRange(0, PHOTOS_DESCRIPTION.length - 1)],
  likes: getRandomInRange(PHOTO_MIN_LIKES, PHOTO_MAX_LIKES),
  comments: Array.from({length: getRandomInRange(1, 2)}, (_, index) => createComment(index)),
});

//Функцию написал как понимал. Ту, что приводил в примере я не смог понять и применить.
function createCards(amount){
  const arr = [];
  for (let i = 0; i <= amount; i++) {
    arr.push(createPhotoBlock(i));
  }
  return arr;
}


createCards(MAX_CARDS);

//Функция, возращающая случайное целое число (источник: https://myrusakov.ru/js-random-numbers.html):
function getRandomInRange(min, max) {
  if (min >= max) {
    throw ('Минимальное число не может быть больше, либо равно максимальному');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция, проверяющая длину строки (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length):
function checkStringLength(string, maxlength) {
  return string.length >= maxlength;
}

checkStringLength('similarDescription', EXAMPLE_NUMBER); //что бы eslint не ругался
