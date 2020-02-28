import DayList from '../components/day-list.js';
import Day from '../components/day.js';
import EventList from '../components/event-list.js';
import Event from '../components/event.js';
import EventEdit from '../components/event-edit.js';

import {renderElement} from '../components/util.js';
import {setEventsFromData} from '../mock/event-mock.js';


export default class TripController {
  constructor(container) {
    this._container = container;
    this._events = setEventsFromData(5);

    this._dayLIst = new DayList();
    this._day = new Day();
    this._eventList = new EventList();
  }

  _renderEvent(eventData, container) {
    const event = new Event(eventData);
    const eventEditForm = new EventEdit();

    const replaceEventToEdit = () => {
      container.replaceChild(eventEditForm.getElement(), event.getElement());
    };
    const replaceEditToEvent = () => {
      container.replaceChild(event.getElement(), eventEditForm.getElement());
    };

    const onEscKeyDown = (evt) => {
      const isEcsDown = evt.key === `Ecs` || evt.key === `Escape`;
      if (isEcsDown) {
        replaceEditToEvent();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    event.onRollUpClick(() => {
      replaceEventToEdit();
      document.addEventListener(`keydown`, onEscKeyDown);
    });
    eventEditForm.onEditFormSubmit(() => {
      replaceEditToEvent();
    });

    renderElement(container, event.getElement());
  }

  render() {
    renderElement(this._container, this._dayLIst.getElement());
    renderElement(this._dayLIst.getElement(), this._day.getElement());
    renderElement(this._day.getElement(), this._eventList.getElement());
    const eventList = document.querySelector(`.trip-events__list`);
    this._events.forEach((event) => this._renderEvent(event, eventList));
  }
}
