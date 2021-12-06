import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Dashboad.css";
import Form from "./Form/Form";
import Table from "./Table/Table";

const INITIAL_FORM_STATE = {
  date: "",
  km: "",
};

function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState(INITIAL_FORM_STATE);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const handleOnFormFieldChange = (e) => {
    const { target } = e;

    let value = target.value;

    if (target.type === "date") value = new Date(value).toLocaleDateString("ru-RU");

    if (target.type === "number") value = parseFloat(value);

    setWorkout((prev) => ({
      ...prev,
      [target.name]: target.type === "checkbox" ? target.checked : value,
    }));
  };

  const handleAddWorkout = (e) => {
    e.preventDefault();
    if (workout.date !== "" && workout.km !== "") {
      let isNew = true;
      let newWorkouts = [];

      newWorkouts = workouts.map((w) => {
        if (w.date === workout.date) {
          w.km = (w.km + workout.km).toFixed(1);
          isNew = false;
        }
        return w;
      });

      if (isNew) {
        newWorkouts = [
          ...workouts,
          {
            id: uuidv4(),
            ...workout,
          },
        ];
      }

      setWorkouts(newWorkouts.sort((a, b) => b.date.localeCompare(a.date)));

      setWorkout(INITIAL_FORM_STATE);

      setIsEmpty(false);
    }
  };

  const handleEditWorkout = (e) => {
    e.preventDefault();

    setWorkouts(workouts.map((w) => (w.id === workout.id ? workout : w)));

    setWorkout(INITIAL_FORM_STATE);
    setIsEditing(false);
  };

  const handleEditWorkoutClick = (id) => {
    setWorkout(workouts.filter((o) => o.id === id)[0]);
    setIsEditing(true);
  };

  const handleDeleteWorkout = (id) => {
    setWorkouts((prev) => {
      prev = prev.filter((workout) => workout.id !== id);
      if (prev.length === 0) setIsEmpty(true);
      return prev;
    });
  };

  return (
    <div className="container">
      {/* prettier-ignore */}
      <Form
        formData={workout}
        isEditing={isEditing}
        onAddWorkout={handleAddWorkout}
        onEditWorkout={handleEditWorkout}
        onFieldChange={handleOnFormFieldChange}
      />
      {isEmpty ? <p className="no-data">Данных пока что нет.</p> : <Table header={["Дата (ДД.ММ.ГГ)", "Пройдено км", "Действия"]} body={workouts} onEditWorkoutClick={handleEditWorkoutClick} onDeleteWorkout={handleDeleteWorkout} />}
    </div>
  );
}

export default Dashboard;
