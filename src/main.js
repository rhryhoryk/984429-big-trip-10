// import {createEditForm} from './components/edit-form.js';
// import {generateEventTemplate} from './components/event.js';
// import {createFiltersTemplate} from './components/filters.js';
// import {createMainMenu} from './components/main-menu.js';
// import {createMainTripInfo} from './components/trip-info.js';


import {setEvents} from './mock/event-mock.js';
import {filterNames} from './mock/filter-mock.js';
import {menuPoints} from './mock/main-menu-mock.js';

import TripInfoComponent from './components/trip-info.js';
import MainMenuComponent from './components/main-menu.js';
import FilterComponent from './components/filters.js';
import EditFormComponent from './components/edit-form.js';
import EventComponent from './components/event.js';

// const render = (element, html, place = `beforeend`) => {
//   element.insertAdjacentHTML(place, html);
// };

const render = (parent, element) => {
  parent.append(element);
};

const tripInfo = document.querySelector(`.trip-info`);

// render(tripInfo, createMainTripInfo(), `afterbegin`);
render(tripInfo, new TripInfoComponent().getElement());

const tripControl = document.querySelector(`.trip-controls`);
// render(tripControl, createMainMenu());
// render(tripControl, createFiltersTemplate());
render(tripControl, new MainMenuComponent(menuPoints).getElement());
render(tripControl, new FilterComponent(filterNames).getElement());

const tripEventsSection = document.querySelector(`.trip-events`);
// render(tripEventsSection, createEditForm());
render(tripEventsSection, new EditFormComponent().getElement());

const events = setEvents(5);
// render(tripEventsSection, generateEventTemplate(events[0]));
// events.slice(1).forEach((event) => render(tripEventsSection, generateEventTemplate(event)));

// renderClass(tripEventsSection, new EventComponent(events[0]).getElement());
events.forEach((event) => render(tripEventsSection, new EventComponent(event).getElement()));
