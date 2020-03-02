import Event from '../components/event.js';
import EventEdit from '../components/event-edit.js';

import {renderElement} from '../components/util.js';


export default class PointController {
  constructor(container) {
    this._container = container;
  }

  render(eventData) {
    const event = new Event(eventData);
    const eventEditForm = new EventEdit(eventData);

    const replaceEditToEvent = () => {
      this._container.replaceChild(event.getElement(), eventEditForm.getElement());
    };
    const replaceEventToEdit = () => {
      this._container.replaceChild(eventEditForm.getElement(), event.getElement());
    };

    const onEscKeyDown = (evt) => {
      const isEscapeKey = evt.key === `Ecs` || evt.key === `Escape`;

      if (isEscapeKey) {
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

    renderElement(this._container, event.getElement());
    // console.log(Array.from(eventEditForm._event.description).join(` `))
  }
}
