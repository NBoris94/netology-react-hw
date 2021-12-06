import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./WorldClock.css";
import Form from "./Form/Form";
import ClockList from "./ClockList/ClockList";

function WorldClock() {
  const [clocks, setClocks] = useState([]);

  const handleAddClock = (clock) => {
    const existClock = clocks.filter((c) => c.title.toUpperCase() === clock.title.toUpperCase());

    if (existClock.length === 0) setClocks((prev) => [...prev, { id: uuidv4(), ...clock }]);
  };

  const handleDeleteClock = (id) => {
    setClocks((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="world-clock">
      <Form onAddClock={handleAddClock} />
      <hr className="world-clock__divider" />
      <ClockList clocks={clocks} onDeleteClock={handleDeleteClock} />
    </div>
  );
}

export default WorldClock;
