const COMMENTS_ID = fillArray(25);
const COMMENTS_AVATAR = fillArray(6);
const COMMENTS_MESSAGE = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENTS_NAMES = ['Василий', 'Иван', 'Егор', 'Игорь', 'Тарас', 'Марк'];
const PHOTO_ID = fillArray(25);
const PHOTO_URL = fillArray(25);
const PHOTO_DESCRIPTION = ['Овощные культуры','Ягоды','Стручковые','Бобовые','Грибы'];
const PHOTO_LIKES = fillArray(25).slice(14); //число лайков - массив от 15 до 200

const getRandomArrayElement = (elements) => elements[getRandomInRange(0, elements.length - 1)];


// Строим комментарии
const createComments = () => {
  return {
    id: getRandomArrayElement(COMMENTS_ID),
    avatar: 'img/avatar-' + getRandomArrayElement(COMMENTS_AVATAR) + '.svg',
    message: getRandomArrayElement(COMMENTS_MESSAGE),
    name:getRandomArrayElement(COMMENTS_NAMES),
  };
};

// Записываем комментарии в массив
const similarComments = Array.from({length:6}, createComments);


// Строим описание фотографии
const createDescription = () => {
  return {
    id: getRandomArrayElement(PHOTO_ID),
    url: 'photos/{{' + getRandomArrayElement(PHOTO_URL) + '}}.jpg',
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomArrayElement(PHOTO_LIKES),
    comments: getRandomArrayElement(similarComments),
  };
};

// Записываем описание в массив
const similarDescription = Array.from({length:25}, createDescription);


// !Вспомогательные функции!


//Функция, заполняющая массив числами по порядку до максимального
function fillArray(max) {
  const array = [];
  if (max) {for (let i = 1; i <= max;) {
    array.push(i++)
    };
  };
  return array;
}

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

checkStringLength('string', 10); //что бы eslint не ругался

similarDescription; //что бы eslint не ругался
