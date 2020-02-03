import * as util from './util.js';

const date = util.generateRandomDate();

export const generateEvent = () => {
  return {
    type: util.getRandomItem(util.types),
    city: util.getRandomItem(util.cities),
    sight: `http://picsum.photos/300/150?r=${Math.random()}`,
    description: new Set(util.generateSet(util.descriptions)),
    date,
    startTime: `${date.getHours()}:${date.getMinutes()}`,
    endTime: `${date.getHours()}:${date.getMinutes()}`,
    price: util.getRandomNumber(100, 1000),
    addition: new Set(util.generateSet(util.additions)),
  };
};

export const generateEvents = (amount) => {
  return new Array(amount).fill(``).map(generateEvent);
};
