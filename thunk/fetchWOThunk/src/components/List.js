import React, {useEffect} from 'react';
import ListItem from "./ListItem";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemRequest, fetchList} from "../slices/listSlice";
import { clearForm } from "../slices/itemSlice";
import Loader from "./Loader";
import Error from "./Error";

function filterItems(items, filter) {
  let filteredItems = [];

  if (filter.filterName === "") {
    filteredItems = items;
  }
  else {
    filteredItems = items.filter((i) => i.name.toLowerCase().includes(filter.filterName.toLowerCase()));
  }

  return filteredItems;
}

function List() {
  const dispatch = useDispatch();
  const { items, loadingState, error, itemsOnDelete } = useSelector((store) => store.listSlice);
  const filter = useSelector((store) => store.filterSlice);

  useEffect(() => {
    fetchList(dispatch);
  }, [dispatch]);

  const itemsView = filterItems(items, filter);

  const deleteHandler = (id) => {
    deleteItemRequest(dispatch, id);
    dispatch(clearForm(id));
  }

  if (loadingState === 'pending') {
    return <Loader />;
  }

  if (error) {
    return <Error message="Произошла ошибка! Обновите страницу." />
  }

  return (
    <ul className="list">
      {itemsView.map((i) => {
        const itemOnDelete = itemsOnDelete.find((iod) => iod.id === i.id);
        if (itemOnDelete !== undefined) {
          return <ListItem key={i.id} { ...i } loading={itemOnDelete.loading} error={itemOnDelete.error} deleteHandler={deleteHandler} />
        }
        return <ListItem key={i.id} { ...i } deleteHandler={deleteHandler} />;
      })}
    </ul>
  );
}

export default List;