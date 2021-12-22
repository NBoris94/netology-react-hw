import React, { useState, useEffect } from "react";
import List from "./List";
import Details from "./Details";

function Dashboard() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [isEmptyInfo, setIsEmptyInfo] = useState(true);

  const loadListHandler = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setList(data);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
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
      {loading ? <p>Загрузка</p> : <List list={list} onClickHandler={onClickHandler} />}
      {isEmptyInfo ? null : <Details info={info} />}
    </div>
  );
}

export default Dashboard;
