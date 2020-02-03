export const types = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
export const cities = [`Geneva`, `Amsterdam`, `Chamonix`, `Moscow`, `Minsk`, `Hrodno`];
export const descriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`];
export const additions = [{
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
export const filtersName = [`Everything`, `Future`, `Past`];
export const menuPoints = [`Table`, `Stats`];

export const getRandomItem = (arr) => {
  const item = arr[getRandomNumber(0, arr.length)];
  return item;
};

export const getRandomNumber = (min, max) => {
  const number = min + Math.floor(Math.random() * max);
  return number;
};

export const generateSet = (array) => {
  return array.filter(() => Math.random() > 0.5).slice(0, 2);
};

export const generateRandomDate = () => {
  const date = new Date();
  return date;
};
