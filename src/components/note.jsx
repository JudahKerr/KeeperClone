import React, { useState } from "react";
import { GithubPicker } from "react-color";

function Note(props) {
  const [color, setColor] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showDeleteCheck, setShowDeleteCheck] = useState(false);
  const [deleteCheck, setDeleteCheck] = useState(false);

  function deleteNote() {
    setShowDeleteCheck(!showDeleteCheck);
  }

  function changeColor() {
    setShowColorPicker(!showColorPicker);
  }

  function colorChange(event) {
    setColor(event.hex);
    console.log(event);
    setShowColorPicker(!showColorPicker);
  }

  function handleDeleteCheckYes() {
    props.delete(props.id);
    setShowDeleteCheck(!showDeleteCheck);
    
  }

  function handleDeleteCheckNo() {
    setShowDeleteCheck(!showDeleteCheck);
  }

  return (
    <div>
      <div className="note" style={{ backgroundColor: color }}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="colorButton" onClick={changeColor}>
          Color
        </button>
        {showColorPicker && (
          <GithubPicker
            className="colorPicker"
            color={color}
            onChange={colorChange}
          />
        )}

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
