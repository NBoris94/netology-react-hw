import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

function Notes({ deleteNoteHandler, notes }) {
  const notesView = notes.map((n) => {
    return <Note key={n.id} deleteNoteHandler={deleteNoteHandler} {...n} />;
  });

  if (notesView.length === 0) return null;

  return <div className="notes-list">{notesView}</div>;
}

Notes.defaultProps = {
  notes: [],
};

Notes.propTypes = {
  notes: PropTypes.array,
  deleteNoteHandler: PropTypes.func,
};

export default Notes;
