import * as util from '../components/util.js';

const types = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const cities = [`Geneva`, `Amsterdam`, `Chamonix`, `Moscow`, `Minsk`, `Hrodno`];
const descriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`];
const additions = [{
  add: `Add luggage`,
  price: `10`
}, {
  add: `Switch to comfort class`,
  price: `150`
}, {
  add: `Add meal`,
  price: `2`
}, {
  add: `Some stuff`,
  price: `50`
}, {
  add: `Add rest`,
  price: `20`
}];

const date = util.generateRandomDate();

const generateEvent = () => {
  return {
    type: util.getRandomItem(types),
    city: util.getRandomItem(cities),
    sight: `http://picsum.photos/300/150?r=${Math.random()}`,
    description: new Set(util.createSet(descriptions)),
    date,
    startTime: `${date.getHours()}:${date.getMinutes()}`,
    endTime: `${date.getHours()}:${date.getMinutes()}`,
    price: util.generateRandomNumber(100, 1000),
    addition: new Set(util.createSet(additions)),
  };
};

export const setEventsFromData = (amount) => {
  return new Array(amount).fill(``).map(generateEvent);
};
