import React from 'react';
import {change} from "../slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";

function FilterForm() {
  const dispatch = useDispatch();

  const filter = useSelector((store) => store.filterSlice);

  const formFieldChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(change({name, value}));
  };

  return (
    <form className="form">
      <div className="form__group">
        <label htmlFor="filterTitle" className="form__label">По названию</label>
        <input type="text" className="form__input" id="filterTitle" name="filterTitle" onChange={formFieldChangeHandler} value={filter.filterTitle}/>
      </div>
    </form>
  );
}

export default FilterForm;