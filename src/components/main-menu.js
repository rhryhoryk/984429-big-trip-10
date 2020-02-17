import * as util from './util.js';

const createMenuPoint = (array) => {
  return array.map((point) => {
    return (
      `<a class="trip-tabs__btn" href="#">${point}</a>`
    );
  }).join(`\n`);
};

const createMainMenu = (array) => {
  const menuPoint = createMenuPoint(array);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${menuPoint}
    </nav>`
  );
};

export default class MainMenuComponent {
  constructor(menuPoints) {
    this._menuPoints = menuPoints;
    this._element = null;
  }

  getTemplate() {
    return createMainMenu(this._menuPoints);
  }

  getElement() {
    if (!this._element) {
      this._element = util.createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
