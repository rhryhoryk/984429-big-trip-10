export const generateRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * max);
};

export const getRandomItem = (arr) => {
  return arr[generateRandomNumber(0, arr.length)];
};

export const createSet = (array) => {
  return array.filter(() => Math.random() > 0.5).slice(0, 2);
};

export const generateRandomDate = () => {
  return new Date();
};

export const createElement = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element.firstChild;
};

export const render = (parent, element) => {
  parent.append(element);
};
