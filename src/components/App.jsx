import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  const [colorArray, setColorArray] = useState([]);

  function addColor(color, id) {
    setColorArray((prevColor) => {
      return [...prevColor, color];
    });
  }

  function deleteColor(id) {
    setColorArray((prevColor) => {
      return prevColor.filter((color, index) => {
        return index !== id;
      });
    });
  }

  function addNote(note) {
    setNoteArray((prevNote) => {
      return [...prevNote, note];
    });

    if(colorArray.length < 1) {
      setColorArray(["#FFFFFF"]);
    }
  }

  function deleteNote(id) {
    setNoteArray((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} addColor={addColor} />
      {noteArray.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={deleteNote}
            color={colorArray}
            deleteColor={deleteColor}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
