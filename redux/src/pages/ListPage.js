import React from 'react';
import List from "../components/List";
import Form from "../components/Form";
import Card from "../components/Card";
import FilterForm from "../components/FilterForm";

function ListPage() {
  return (
    <div className="services">
      <Card title="Форма заполнения услуги">
        <Form/>
      </Card>
      <Card title="Фильтр">
        <FilterForm />
      </Card>
      <Card title="Список услуг">
        <List/>
      </Card>
    </div>
  );
}

export default ListPage;
