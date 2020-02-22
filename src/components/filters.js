import AbstractComponent from './abstract-component.js';


const createFilterspoint = (array) => {
  return array.map((filter) => {
    return (
      `<div class="trip-filters__filter">
        <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" checked>
        <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
      </div>`
    );
  }).join(`\n`);
};


const createFiltersTemplate = (array) => {
  const filters = createFilterspoint(array);
  return (
    `<form class="trip-filters" action="#" method="get">
      ${filters}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class FilterComponent extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }
}
