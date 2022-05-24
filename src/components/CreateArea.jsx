import React, { useState } from "react";
import { GithubPicker } from "react-color";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [init, setInit] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("");

  function colorChange(event) {
    props.addColor(event.hex, props.id);
    setShowColorPicker(!showColorPicker);
    setColor(event.hex);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
    setColor("");
  }

  function expandEffect() {
    setInit(true);
  }

  return (
    <div onClick={expandEffect} className="create-area">
      <form style={{ backgroundColor: color }}>
        {init ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
            style={{ backgroundColor: color }}
          />
        ) : null}
        {init ? (
          <div
            className="color-div"
            onMouseEnter={() => setShowColorPicker(true)}
            onMouseLeave={() => setShowColorPicker(false)}
          >
            {showColorPicker && (
              <GithubPicker
                className="colorPicker"
                color={color}
                onChange={colorChange}
                width="220px"
                triangle="none"
              />
            )}
          </div>
        ) : null}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={init ? "3" : "1"}
          onChange={handleChange}
          value={note.content}
          style={{ backgroundColor: color }}
        />
        {init ? <button onClick={submitNote}>+</button> : null}
      </form>
    </div>
  );
}

export default CreateArea;
