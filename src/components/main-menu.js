import AbstractComponent from './abstract-component.js';

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

export default class MainMenuComponent extends AbstractComponent {
  constructor(menuPoints) {
    super();
    this._menuPoints = menuPoints;
  }

  getTemplate() {
    return createMainMenu(this._menuPoints);
  }
}
