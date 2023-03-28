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
  const result = Math.random() * (max - min) + min;
  return +result.toFixed(n);
}

getRandomPositiveFloat ( 0, 5 ,3 );


//задание 4.9
//

const TITLES = [
  'Полет птиц в рассветном небе.',
  'Грустный клоун на цирковой арене.',
  'Шелест листьев под ногами.',
  'Золотой закат над океаном.',
  'Первый снег в городе.',
  'Кошка, спящая на подоконнике.',
  'Горячий шоколад в зимний вечер.',
  'Свечи, горящие на старом камине.',
  'Сумасшедший танец под дождем.',
  'Ветер, играющий с волосами.',
  'Отражение лунного света на воде.',
  'Черный кофе на рассвете.',
  'Радуга после дождя.',
  'Падающая звезда в ночном небе.',
  'Пахнущий цветущий сад.',
  'Лежа на пляже под теплым солнцем.',
  'Голоса птиц на рассвете.',
  'Собака, играющая на зеленой лужайке.',
  'Жареный маршмеллоу у костра.',
  'Гладь зеркального озера.',
  'Дождевые капли на окне.',
  'Смех друзей на вечеринке.',
  'Огни ночного города.',
  'Горячий душ после холодной прогулки.',
  'Летящий самолет в закатном небе.',
];

const TYPES = [
  'palace', 'flat', 'house', 'bungalow', 'hotel',
];

const CHECKINS = [
  '12:00', '13:00', '14:00',
];

const CHECKOUTS = [
  '12:00', '13:00', '14:00',
];

const FEATURE = [
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getFeatures = () => FEATURE.slice(getRandomPositiveInteger( 0, 5 ));

const getDescription = () => {
  let text ='';
  for (let i = 0; i <= getRandomPositiveInteger( 2, 5 ); i++ ) {
    text += ` ${getRandomArrayElement(TITLES)}`;
  }
  return text;
}

const getPhotos = () => PHOTOS.slice(getRandomPositiveInteger( 0, 2 ))

//получение случайного элемента из переданного массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//создаем объект автора
const createAuthor = (index) => {
  index++;
  if (index  < 10) {
    index = '0' + index;
  }
  return { avatar: `img/avatars/user${index}.png` };
};

//объект локация
let locations = '';
const createLocation = () => {
  locations = {
    lat: getRandomPositiveFloat ( 35.65000, 35.70000 , n = 5 ),
    lng: getRandomPositiveFloat ( 139.70000, 139.80000 , n = 5 ),
  };
  return locations;
};

//создаем объект offer
const createOffer = (index) => ({
  title: TITLES[index],
  address: locations.lat +','+ locations.lng,
  price: getRandomPositiveInteger ( 1000, 10000 ),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomPositiveInteger ( 1, 10 ),
  guests: getRandomPositiveInteger ( 1, 100 ),
  checkin: getRandomArrayElement(CHECKINS),
  checkout: getRandomArrayElement(CHECKOUTS),
  features: getFeatures(),
  description: getDescription(),
  photos: getPhotos(),
});

const createAdvert = (index) => ({
  author: createAuthor(index),
  location: createLocation(),
  offer: createOffer(index),
});

const arrayAdverts = Array.from({length: 10}, (_, index) => createAdvert(index));

//console.log(arrayAdverts);
