export const generateRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * max);
  // return number;
};

export const getRandomItem = (arr) => {
  return arr[generateRandomNumber(0, arr.length)];
  // return item;
};

export const createSet = (array) => {
  return array.filter(() => Math.random() > 0.5).slice(0, 2);
};

export const generateRandomDate = () => {
  return new Date();
  // return date;
};

export const createElement = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element.firstChild;
};
