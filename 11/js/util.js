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

const isEscapeKey = (evt) => evt.key === 'Escape';

const compareElements = (arr) => {
  const lowerCasedArray = arr.map( (element) => element.toLowerCase() );
  return arr.length === new Set(lowerCasedArray).size;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomInRange, checkStringLength, isEscapeKey, compareElements, debounce};
