import { getRandomIntInclusive } from './utils.js';

const DESCRIPTIONS = [
  'С первым снегом!!!',
  'А сейчас я уже дома',
  'Были сегодня в парке, посмотрите на эту белку!',
  'Наша семья',
  'Наконец-то в отпуск!',
  'С пополнением нас!',
  'Простой вид из окна',
  'Они говорили завести кота, чтобы скучно не было...',
  'Сфотографировала молнию прошлой ночью. Успела',
  'Купили новые обои, обновляем интерьер',
  'Ходили по ягоды с бабулей',
];

function mockPhoto (_, index) {
  const id = index + 1;

  return {
    id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[getRandomIntInclusive(0,DESCRIPTIONS.length - 1)],
    likes: getRandomIntInclusive(15,200),
    comments: getRandomIntInclusive(0,200),
  };
}

const mockPhotos = () => Array.from ({ length: 25}, mockPhoto);

export { mockPhotos };
