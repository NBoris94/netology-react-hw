import React, { useState, useEffect } from "react";
import Notes from "./Notes/Notes";
import Form from "./NoteForm/Form";
import "./MyNotes.css";

function MyNotes() {
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(true);

  useEffect(() => {
    getNotesHandler();
  }, []);

  const getNotesHandler = () => {
    setLoadingNotes(true);
    fetch("http://localhost:7777/notes")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
        if (loadingNotes) setLoadingNotes(false);
      });
  };

  const addNoteHandler = (note) => {
    fetch("http://localhost:7777/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      if (response.ok) {
        getNotesHandler();
      }
    });
  };

  const deleteNoteHandler = (id) => {
    fetch(`http://localhost:7777/notes/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        getNotesHandler();
      }
    });
  };

  return (
    <div className="container">
      <div className="my-notes">
        <div className="my-notes__group">
          <h1 className="my-notes__title">Мои заметки</h1>
          <button className="my-notes__reload" onClick={getNotesHandler}>
            <span className="material-icons">update</span> Обновить
          </button>
        </div>
        <hr className="my-notes__divider" />
        <Notes notes={notes} deleteNoteHandler={deleteNoteHandler} />
        <hr className="my-notes__divider" />
        <Form addNoteHandler={addNoteHandler} />
      </div>
    </div>
  );
}

export default MyNotes;
