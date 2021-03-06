import AbstractComponent from './abstract-component.js';

const createMainTripInfo = () => {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam &mdash; ... &mdash; Amsterdam</h1>

        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    </section>`
  );
};

export default class TripInfo extends AbstractComponent {
  getTemplate() {
    return createMainTripInfo();
  }
}
