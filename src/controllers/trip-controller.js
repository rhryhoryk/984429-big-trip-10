import EventComponent from '../components/event.js';
import EventEditFormComponent from '../components/edit-form.js';

import {render} from '../components/util.js';


export default class TripController {
  constructor(event, container) {
    this._container = container;

    this._eventComponent = new EventComponent(event);
    this._eventEditFormComponent = new EventEditFormComponent();
  }

  render() {
    const onEscKeyDown = (evt) => {
      const isEcsDown = evt.key === `Ecs` || evt.key === `Escape`;
      if (isEcsDown) {
        replaceEditToEvent();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const replaceEventToEdit = () => {
      this._container.replaceChild(this._eventEditFormComponent.getElement(), this._eventComponent.getElement());
    };
    const replaceEditToEvent = () => {
      this._container.replaceChild(this._eventComponent.getElement(), this._eventEditFormComponent.getElement());
    };

    this._eventComponent.setEventRollupClickHandler(() => {
      replaceEventToEdit();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    this._eventEditFormComponent.setSubmitEditFormHandler(() => {
      replaceEditToEvent();
    });

    render(this._container, this._eventComponent.getElement());
  }
}
