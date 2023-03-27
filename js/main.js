//Генерация случайного целого числа из диапазона от a до b включительно

function getRandomPositiveInteger ( a, b = 1 ) {
  if (a === undefined) {
    throw new Error ('Первый параметр должен быть число');
  }
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomPositiveInteger(0,1);

//Генерация случайного числа с плавающей точкой из диапазона от a до b с n знаков после запятой

function getRandomPositiveFloat ( a, b = 1 , n = 1 ) {
  if (a === undefined) {
    throw new Error ('Первый параметр должен быть число');
  }
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (max - min + 1) + min;
  return +result.toFixed(n);
}

getRandomPositiveFloat ( 0, 5 ,3 );
