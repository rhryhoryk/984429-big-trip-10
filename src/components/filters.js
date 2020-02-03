import {filtersName} from '../mock/util.js';

const generateFilters = (array) => {
  return array.map((filter) => {
    return (
      `<div class="trip-filters__filter">
        <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" checked>
        <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
      </div>`
    );
  }).join(`\n`);
};

const filters = generateFilters(filtersName);

export const createFiltersTemplate = () => {
  return (
    `<form class="trip-filters" action="#" method="get">
      ${filters}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};
