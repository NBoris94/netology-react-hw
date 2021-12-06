import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";

const INITIAL_FORM_STATE = {
  title: "",
  timezone: 0,
};

function Form({ onAddClock }) {
  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const OnFieldChange = ({ target }) => {
    let value = target.value;

    if (target.type === "number") value = parseInt(value);

    setForm((prev) => ({
      ...prev,
      [target.name]: target.type === "checkbox" ? target.checked : value,
    }));
  };

  const onAdd = (e) => {
    e.preventDefault();

    if (form.title === "" || form.timezone === 0) return null;

    onAddClock(form);

    setForm(INITIAL_FORM_STATE);
  };
  return (
    <form className="form" onSubmit={onAdd}>
      <div className="form__group">
        <label htmlFor="title" className="form__label">
          Название
        </label>
        <input type="text" className="form__input" id="title" name="title" value={form.title} onChange={OnFieldChange} />
      </div>
      <div className="form__group">
        <label htmlFor="timezone" className="form__label">
          Временная зона
        </label>
        <input type="number" className="form__input" id="timezone" name="timezone" step="1" value={form.timezone} onChange={OnFieldChange} />
      </div>
      <div className="form__group">
        <button type="submit" className="form__submit">
          Добавить
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  onAddClock: PropTypes.func,
};

export default Form;
