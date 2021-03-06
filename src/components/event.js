import AbstractComponent from './abstract-component.js';

const createAdditionTemplate = (array) => {
  return array.map((arrElement) => {
    return (
      `<li class="event__offer">
        <span class="event__offer-title">${arrElement.add}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${arrElement.price}</span>
      </li>`
    );
  }).join(`\n`);
};

const createEventTemplate = (event) => {
  const additions = createAdditionTemplate(Array.from(event.addition));
  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${event.type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${event.type} ${event.city}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${event.startTime}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${event.endTime}</time>
          </p>
          <p class="event__duration">1H 30M</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${event.price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${additions}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class Event extends AbstractComponent {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    return createEventTemplate(this._event);
  }

  onRollUpClick(handler) {
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler);
  }
}
