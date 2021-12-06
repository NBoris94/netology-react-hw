import React from "react";
import PropTypes from "prop-types";

function Note({ deleteNoteHandler, ...props }) {
  return (
    <div className="note">
      <button className="note__delete" onClick={() => deleteNoteHandler(props.id)}>
        <span className="material-icons">close</span>
      </button>
      <p className="note__text">{props.content}</p>
    </div>
  );
}

Note.defaultProps = {
  id: 0,
  content: "",
};

Note.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  deleteNoteHandler: PropTypes.func,
};

export default Note;
