import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [init, setInit] = useState(false);

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
  }

  function expandEffect() {
    setInit(true);
  }

  return (
    <div onClick={expandEffect}>
      <form>
        {init ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        ) : null}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={init ? "3" : "1"}
          onChange={handleChange}
          value={note.content}
        />
        {init ? <button onClick={submitNote}>+</button> : null}
      </form>
    </div>
  );
}

export default CreateArea;
