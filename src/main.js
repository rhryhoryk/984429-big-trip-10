import {createEditForm} from './components/edit-form.js';
import {generateEventTemplate} from './components/event.js';
import {createFiltersTemplate} from './components/filters.js';
import {createMainMenu} from './components/main-menu.js';
import {createMainTripInfo} from './components/trip-info.js';
import {generateEvents} from './mock/event-mock.js';

const render = (element, html, place = `beforeend`) => {
  element.insertAdjacentHTML(place, html);
};

const tripInfo = document.querySelector(`.trip-info`);

render(tripInfo, createMainTripInfo(), `afterbegin`);

const tripControl = document.querySelector(`.trip-controls`);
render(tripControl, createMainMenu());
render(tripControl, createFiltersTemplate());

const tripEventsSection = document.querySelector(`.trip-events`);
render(tripEventsSection, createEditForm());

const events = generateEvents(5);
render(tripEventsSection, generateEventTemplate(events[0]));
events.slice(1).forEach((event) => render(tripEventsSection, generateEventTemplate(event)));
