import moment from 'moment';

export const formatDate = (date) => {
  return moment(date).format(`l`);
};

export const formatTime = (date) => {
  return moment(date).format(`LTS`);
};

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

export const renderElement = (parent, element, place = `beforeend`) => {
  switch (place) {
    case `afterbegin`:
      parent.prepend(element);
      break;
    case `beforeend`:
      parent.append(element);
      break;
  }
};

export const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};
