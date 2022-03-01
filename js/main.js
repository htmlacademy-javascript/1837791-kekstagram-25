//Функция, возращающая случайное целое число (источник: https://myrusakov.ru/js-random-numbers.html):
function getRandomInRange(min, max) {
  if (min>max) {
     return console.log('ОШИБКА! Минимальное числе не может быть больше максимального')
  }
  if (min=max) {
     return console.log('ОШИБКА! Минимальное и максимальное число не должны совпадать')
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Функция, проверяющая длину строки (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length):
function stringlength(string,maxlength) {
  if (string.length > maxlength) {
      return false;
  }
  return true;
  }
