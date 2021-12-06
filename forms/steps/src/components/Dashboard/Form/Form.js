import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

function Form({ formData, isEditing, onAddWorkout, onEditWorkout, onFieldChange }) {
  let date = formData.date;
  if (formData.date !== "") date = formData.date.split(".").reverse().join("-");
  return (
    <form className="workout-form" onSubmit={isEditing ? onEditWorkout : onAddWorkout}>
      <div className="workout-form__group">
        <label htmlFor="date" className="workout-form__label">
          Дата (ДД.ММ.ГГ)
        </label>
        <input type="date" className="workout-form__input" id="date" name="date" value={date} onChange={onFieldChange} />
      </div>
      <div className="workout-form__group">
        <label htmlFor="km" className="workout-form__label">
          Пройдено км
        </label>
        <input type="number" className="workout-form__input" id="km" name="km" step="0.1" value={formData.km} onChange={onFieldChange} />
      </div>
      <div className="workout-form__group">
        <button className="workout-form__submit">Ок</button>
      </div>
    </form>
  );
}

Form.defaultProps = {
  formData: {
    date: "",
    km: "",
  },
};

Form.propTypes = {
  formData: PropTypes.object,
  isEditing: PropTypes.bool,
  onAddWorkout: PropTypes.func,
  onEditWorkout: PropTypes.func,
  onFieldChange: PropTypes.func,
};

export default Form;
