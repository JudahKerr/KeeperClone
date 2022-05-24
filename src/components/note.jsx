import React, { useState } from "react";

function Note(props) {
  const [showDeleteCheck, setShowDeleteCheck] = useState(false);

  function deleteNote() {
    setShowDeleteCheck(!showDeleteCheck);
  }

  function handleDeleteCheckYes() {
    props.delete(props.id);
    props.deleteColor(props.id);
    setShowDeleteCheck(!showDeleteCheck);
  }

  function handleDeleteCheckNo() {
    setShowDeleteCheck(!showDeleteCheck);
  }

  return (
    <div>
      <div className="note" style={{ backgroundColor: props.color[props.id] }}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={deleteNote}>Delete</button>
      </div>
      {showDeleteCheck && (
        <div id="deleteCheck">
          <h2>Are you sure you want to delete?</h2>
          <button onClick={handleDeleteCheckYes}>Yes</button>
          <button onClick={handleDeleteCheckNo}>No</button>
        </div>
      )}
    </div>
  );
}

export default Note;
