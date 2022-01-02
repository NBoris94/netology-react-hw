import React from 'react';
import List from "../components/List";
import Card from "../components/Card";
import FilterForm from "../components/FilterForm";

function ListPage() {
  return (
    <div className="services">
      <Card title="Фильтр">
        <FilterForm />
      </Card>
      <Card title="Список услуг" addBtn>
        <List/>
      </Card>
    </div>
  );
}

export default ListPage;
