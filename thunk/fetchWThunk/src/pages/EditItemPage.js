import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {changeFields, clearForm, getServiceRequest, updateServiceRequest} from "../slices/itemSlice";
import Card from "../components/Card";
import Form from "../components/Form";

function EditItemPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const form = useSelector((store) => store.itemSlice)

  useEffect(() => {
    dispatch(getServiceRequest(id));
  }, [dispatch, id]);


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
    <Card title="Редактировать услугу">
      <Form {...form.item} loading={form.loading} error={form.error} submitHandler={submitHandler} formFieldChangeHandler={formFieldChangeHandler} cancel={cancel} />
    </Card>
  );
}

export default EditItemPage;