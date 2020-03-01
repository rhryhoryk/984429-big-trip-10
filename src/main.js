import {filterNames} from './mock/filter-mock.js';
import {menuPoints} from './mock/main-menu-mock.js';

import {renderElement} from './components/util.js';

import Board from './components/board.js';
// import Sort from './components/sort.js';
import TripInfo from './components/trip-info.js';
// import NoPoint from './components/no-points.js';
import MainMenuComponent from './components/main-menu.js';
import FilterComponent from './components/filters.js';
import TripController from './controllers/trip-controller.js';

const tripInfo = document.querySelector(`.trip-main`);
renderElement(tripInfo, new TripInfo().getElement(), `afterbegin`);

const tripControl = document.querySelector(`.trip-controls`);
renderElement(tripControl, new MainMenuComponent(menuPoints).getElement());
renderElement(tripControl, new FilterComponent(filterNames).getElement());

// --------------------------------------------------------------------------------------------------------

const bodyContainer = document.querySelector(`.page-body__page-main .page-body__container`);
renderElement(bodyContainer, new Board().getElement());

const tripEventsSection = document.querySelector(`.trip-events`);
const tripController = new TripController(tripEventsSection);
tripController.render();
