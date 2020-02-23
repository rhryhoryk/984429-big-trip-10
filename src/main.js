import {setEvents} from './mock/event-mock.js';
import {filterNames} from './mock/filter-mock.js';
import {menuPoints} from './mock/main-menu-mock.js';

import {render} from './components/util.js';

import TripInfoComponent from './components/trip-info.js';
import MainMenuComponent from './components/main-menu.js';
import FilterComponent from './components/filters.js';
import TripController from './controllers/trip-controller.js';

const tripInfo = document.querySelector(`.trip-info`);
render(tripInfo, new TripInfoComponent().getElement());

const tripControl = document.querySelector(`.trip-controls`);
render(tripControl, new MainMenuComponent(menuPoints).getElement());
render(tripControl, new FilterComponent(filterNames).getElement());

const tripEventsSection = document.querySelector(`.trip-events`);

const events = setEvents(5);
events.forEach((event) => new TripController(event, tripEventsSection).render());
