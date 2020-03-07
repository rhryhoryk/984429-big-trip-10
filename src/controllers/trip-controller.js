import Sort, {SortType} from '../components/sort.js';
import DayList from '../components/day-list.js';
import Day from '../components/day.js';
import EventList from '../components/event-list.js';
import NoPoint from '../components/no-points.js';

import {renderElement} from '../components/util.js';
import {setEventsFromData} from '../mock/event-mock.js';

import PointController from './point-controller.js';

const renderEventList = (container, events) => {
  const pointController = new PointController(container);
  events.forEach((event) => pointController.render(event));
};

export default class TripController {
  constructor(container) {
    this._container = container;
    this._events = setEventsFromData(5);

    this._dayList = new DayList();
    this._day = new Day();
    this._eventList = new EventList();
    this._sort = new Sort();
    this._noPoint = new NoPoint();
  }

  render() {
    if (this._events <= 0) {
      renderElement(this._container, this._noPoint.getElement());
      return;
    }

    renderElement(this._container, this._sort.getElement());
    renderElement(this._container, this._dayList.getElement());
    renderElement(this._dayList.getElement(), this._day.getElement());

    const eventList = this._eventList.getElement();
    renderElement(this._day.getElement(), eventList);
    renderEventList(eventList, this._events);

    this._sort.onSortChange((type) => {
      let sortedList = [];

      switch (type) {
        case SortType.DEFAULT:
          sortedList = this._events.slice();
          break;
        case SortType.PRICE:
          sortedList = this._events.slice().sort((a, b) => a.price - b.price);
          break;
        case SortType.TIME:
          sortedList = this._events.slice().sort((a, b) => a.startTime - b.startTime);
          break;
      }

      eventList.innerHTML = ``;
      renderEventList(eventList, sortedList);
    });
  }

  _onDataChange(pointController, oldData, newData) {
    const index = this.events.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._events = [].concat(this._events.slice(0, index), newData, this._events.slice(index + 1));

    pointController.render(this._events[index]);
  }
}
