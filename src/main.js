import {createEditForm} from './components/edit-form.js';
import {createEvent} from './components/event.js';
import {createFilters} from './components/filters.js';
import {createMainMenu} from './components/main-menu.js';
import {createMainTripInfo} from './components/trip-info.js';

const render = (element, html, place = `beforeend`) => {
  element.insertAdjacentHTML(place, html);
};

const tripInfo = document.querySelector(`.trip-info`);

render(tripInfo, createMainTripInfo(), `afterbegin`);

const tripControl = document.querySelector(`.trip-controls`);
render(tripControl, createMainMenu());
render(tripControl, createFilters());

const tripEventsSection = document.querySelector(`.trip-events`);
render(tripEventsSection, createEditForm());

for (let i = 1; i < 4; i++) {
  render(tripEventsSection, createEvent());
}
