import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeFields, clearForm, updateServiceRequest} from "../slices/itemSlice";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

function AddItemPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useSelector((store) => store.itemSlice);

  const formFieldChangeHandler = (e) => {
    let { name, value } = e.target;
    if (e.target.type === "number") {
      value = Number(value);
    }
    dispatch(changeFields({ name, value }))
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(form.item.name === "" || form.item.price === 0) return;
    const item = form.item;

    dispatch(updateServiceRequest({item, navigate}));
  }

  const cancel = () => {
    dispatch(clearForm());
    navigate("/");
  }

  return (
    <Card title="Добавить новую услугу">
      <Form {...form.item} loading={form.loading} error={form.error} submitHandler={submitHandler} formFieldChangeHandler={formFieldChangeHandler} cancel={cancel} />
    </Card>
  );
}

export default AddItemPage;