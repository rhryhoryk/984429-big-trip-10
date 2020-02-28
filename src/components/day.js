import AbstractComponent from './abstract-component.js';

const createDayTemplate = () => {
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">?</span>
        <time class="day__date" datetime="2019-03-18">??</time>
      </div>
    </li>`
  );
};

export default class Day extends AbstractComponent {
  getTemplate() {
    return createDayTemplate();
  }
}
