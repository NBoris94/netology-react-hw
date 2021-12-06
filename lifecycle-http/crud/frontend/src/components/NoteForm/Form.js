import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";

const INITIAL_FORM_STATE = {
  content: "",
};

function Form({ addNoteHandler }) {
  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const formFieldChangeHandler = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };

  const addHandler = (e) => {
    e.preventDefault();

    if (form.content === "") return null;

    addNoteHandler(form);

    setForm(INITIAL_FORM_STATE);
  };

  return (
    <form className="form" onSubmit={addHandler}>
      <div className="form__text-field">
        <textarea className="form__textarea" name="content" id="" value={form.content} onChange={formFieldChangeHandler} autoFocus></textarea>
        <button type="submit" className="form__submit">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  addNoteHandler: PropTypes.func,
};

export default Form;
