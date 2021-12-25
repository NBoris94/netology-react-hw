import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem } from "../slices/listSlice";
import { change, clearForm } from "../slices/formSlice";

function Form() {
  const dispatch = useDispatch();
  const form = useSelector((store) => store.formSlice);

  const formFieldChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(change({name, value}));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(form.title === "" || form.price === 0) return;

    if (form.id === "") {
      dispatch(addItem(form));
    }
    else {
      dispatch(editItem(form));
    }

    dispatch(clearForm(form.id));
  }

  const cancel = () => {
    dispatch(clearForm(form.id));
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__group">
        <label htmlFor="title" className="form__label">Услуга</label>
        <input type="text" className="form__input" id="title" name="title" onChange={formFieldChangeHandler} value={form.title}/>
      </div>
      <div className="form__group">
        <label htmlFor="price" className="form__label">Цена</label>
        <input type="number" className="form__input" id="price" name="price" onChange={formFieldChangeHandler} value={form.price} />
      </div>
      <div className="form__group">
        <button className="form__submit form__btn" type="submit">Сохранить</button>
        {form.id === "" ? null : <button type="button" className="form__cancel form__btn" onClick={cancel}>Отмена</button>}
      </div>
    </form>
  );
}

export default Form;