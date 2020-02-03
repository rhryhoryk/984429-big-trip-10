import {menuPoints} from '../mock/util.js';

const generateMenuPoint = (array) => {
  return array.map((point) => {
    return (
      `<a class="trip-tabs__btn" href="#">${point}</a>`
    );
  }).join(`\n`);
};

const menuPoint = generateMenuPoint(menuPoints);

export const createMainMenu = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${menuPoint}
    </nav>`
  );
};
