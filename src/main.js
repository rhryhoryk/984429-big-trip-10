import {setEvents} from './mock/event-mock.js';
import {filterNames} from './mock/filter-mock.js';
import {menuPoints} from './mock/main-menu-mock.js';

import TripInfoComponent from './components/trip-info.js';
import MainMenuComponent from './components/main-menu.js';
import FilterComponent from './components/filters.js';
import EventEditFormComponent from './components/edit-form.js';
import EventComponent from './components/event.js';


const render = (parent, element) => {
  parent.append(element);
};

const renderEvent = (event) => {
  const eventComponent = new EventComponent(event);
  const eventEditFormComponent = new EventEditFormComponent();

  const eventRollupBtn = eventComponent.getElement().querySelector(`.event__rollup-btn`);

  eventRollupBtn.addEventListener(`click`, () => {
    tripEventsSection.replaceChild(eventEditFormComponent.getElement(), eventComponent.getElement());

  });

  const eventForm = eventEditFormComponent.getElement().querySelector(`.event__save-btn`);

  eventForm.addEventListener(`click`, () => {
    tripEventsSection.replaceChild(eventComponent.getElement(), eventEditFormComponent.getElement());

  });

  render(tripEventsSection, eventComponent.getElement());

};

const tripInfo = document.querySelector(`.trip-info`);
render(tripInfo, new TripInfoComponent().getElement());

const tripControl = document.querySelector(`.trip-controls`);
render(tripControl, new MainMenuComponent(menuPoints).getElement());
render(tripControl, new FilterComponent(filterNames).getElement());

const tripEventsSection = document.querySelector(`.trip-events`);

const events = setEvents(5);
events.forEach((event) => renderEvent(event));
