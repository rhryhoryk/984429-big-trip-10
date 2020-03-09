import Event from '../components/event.js';
import EventEdit from '../components/event-edit.js';

import {renderElement, replace} from '../components/util.js';

const Mode = {
  DEFAULT: `default`,
  EDIT: `edit`,
};

export default class PointController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;

    this._mode = Mode.DEFAULT;

    this._event = null;
    this._eventEditForm = null;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(eventData) {
    const oldEvent = this._event;
    const oldEventEditForm = this._eventEditForm;

    this._event = new Event(eventData);
    this._eventEditForm = new EventEdit(eventData);

    this._event.onRollUpClick(() => {
      this._replaceEventToEdit();
      document.addEventListener(`keydown`, this._onEscKeyDown);
    });
    this._eventEditForm.onEditFormSubmit(() => {
      this._replaceEditToEvent();
    });

    this._eventEditForm.onFavoriteBtnClick(() => {
      this._onDataChange(this, eventData, Object.assign({}, eventData, {
        isFavorite: !eventData.isFavorite,
      }));
    });

    if (oldEvent && oldEventEditForm) {
      replace(this._event, oldEvent);
      replace(this._eventEditForm, oldEventEditForm);
    } else {
      renderElement(this._container, this._event.getElement());
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToEvent();
    }
  }

  _replaceEditToEvent() {
    // this._eventEditForm.reset();
    replace(this._event, this._eventEditForm);
    this._mode = Mode.DEFAULT;
  }

  _replaceEventToEdit() {
    // this._onViewChange();
    replace(this._eventEditForm, this._event);
    this.mode = Mode.EDIT;
  }

  _onEscKeyDown(evt) {
    const isEscapeKey = evt.key === `Ecs` || evt.key === `Escape`;

    if (isEscapeKey) {
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}
