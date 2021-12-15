import React, { useState, useEffect } from "react";
import List from "./List";
import Details from "./Details";

function Dashboard() {
  const [list, setList] = useState([]);
  const [info, setInfo] = useState({});
  const [isEmptyInfo, setIsEmptyInfo] = useState(true);

  const loadListHandler = () => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json ")
      .then((response) => response.json())
      .then((data) => setList(data));
  };

  useEffect(() => {
    loadListHandler();
  }, []);

  const onClickHandler = (id) => {
    setInfo(list.filter((i) => i.id === id)[0]);
    setIsEmptyInfo(false);
  };

  return (
    <div className="dashboard">
      <List list={list} onClickHandler={onClickHandler} />
      {isEmptyInfo ? null : <Details info={info} />}
    </div>
  );
}

export default Dashboard;
