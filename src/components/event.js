export const createEvent = () => {
  return (
    `<div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
      </div>
      <h3 class="event__title">Drive to Chamonix</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-19T18:00">18:00</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-19T19:00">19:00</time>
        </p>
        <p class="event__duration">1H</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">20</span>
      </p>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>`
  );
};
