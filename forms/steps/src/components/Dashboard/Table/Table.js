import React from "react";
import PropTypes from "prop-types";
import "./Table.css";

function Table({ header, body, onEditWorkoutClick, onDeleteWorkout }) {
  const headerView = header.map((item) => {
    return <th key={item.toString()}>{item}</th>;
  });

  const bodyView = body.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.date}</td>
        <td>{item.km}</td>
        <td>
          <button className="edit" onClick={() => onEditWorkoutClick(item.id)}>
            ✎
          </button>
          <button className="delete" onClick={() => onDeleteWorkout(item.id)}>
            ✘
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>{headerView}</tr>
      </thead>
      <tbody>{bodyView}</tbody>
    </table>
  );
}

Table.defaultProps = {
  header: [],
  body: [],
};

Table.propTypes = {
  header: PropTypes.array,
  body: PropTypes.array,
  onEditWorkoutClick: PropTypes.func,
  onDeleteWorkout: PropTypes.func,
};

export default Table;
