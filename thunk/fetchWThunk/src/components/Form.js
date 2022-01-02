import React from 'react';
import PropTypes from "prop-types";
import Error from "./Error";

function Form({ name, price, content, loading, error, submitHandler, formFieldChangeHandler, cancel }) {

  const disabled = loading === "pending";
  const disabledInputClass = disabled ? "form__input_disabled" : "";
  const disabledBtnClass = disabled ? "btn_disabled" : "";

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__group">
        <label htmlFor="name" className="form__label">Услуга</label>
        <input type="text" className={`form__input ${disabledInputClass}`} id="name" name="name" onChange={formFieldChangeHandler} value={name} disabled={disabled} />
      </div>
      <div className="form__group">
        <label htmlFor="price" className="form__label">Цена</label>
        <input type="number" className={`form__input ${disabledInputClass}`} id="price" name="price" onChange={formFieldChangeHandler} value={price} disabled={disabled} />
      </div>
      <div className="form__group">
        <label htmlFor="content" className="form__label">Описание</label>
        <input type="text" className={`form__input ${disabledInputClass}`} id="content" name="content" onChange={formFieldChangeHandler} value={content} disabled={disabled} />
      </div>
      <div className="form__actions">
        {disabled ? (
          <button className="form__submit btn btn_success btn_disabled btn_loading" type="submit">
            <span className="material-icons">sync</span>
          </button>
        ) : (
          <button className="form__submit btn btn_success" type="submit">Сохранить</button>
        )}
        <button type="button" className={`form__cancel btn btn_danger ${disabledBtnClass}`} onClick={cancel} disabled={disabled}>Отмена</button>
      </div>

      {error !== null ? (
        <Error message="Произошла ошибка! Повторите попытку." />
      ) : null}
    </form>
  );
}

Form.defaultProps = {
  name: "",
  price: 0,
  content: "",
  loading: "",
  error: ""
}

Form.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  content: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
  submitHandler: PropTypes.func,
  formFieldChangeHandler: PropTypes.func,
  cancel: PropTypes.func
}

export default Form;