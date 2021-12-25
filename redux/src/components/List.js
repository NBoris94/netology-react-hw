import React from 'react';
import ListItem from "./ListItem";
import {useDispatch, useSelector} from "react-redux";
import { deleteItem } from "../slices/listSlice";
import { fillForm, clearForm } from "../slices/formSlice";

function filterItems(items, filter) {
  let filteredItems = [];

  if (filter.filterTitle === "") {
    filteredItems = items;
  }
  else {
    filteredItems = items.filter((i) => i.title.toLowerCase().includes(filter.filterTitle.toLowerCase()));
  }

  return filteredItems;
}

function List() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.listSlice.items);
  const filter = useSelector((store) => store.filterSlice);

  const itemsView = filterItems(items, filter);

  const editHandler = (item) => {
    dispatch(fillForm(item));
  }

  const deleteHandler = (id) => {
    dispatch(deleteItem(id));
    dispatch(clearForm(id));
  }

  return (
    <ul className="list">
      {itemsView.map((i) => <ListItem key={i.id} { ...i } editHandler={editHandler} deleteHandler={deleteHandler} />)}
    </ul>
  );
}

export default List;