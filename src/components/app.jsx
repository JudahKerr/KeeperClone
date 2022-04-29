import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";


function creatNotes(note) {
  return (
  <Note 
  title={note.title} 
  content={note.content} 
  key={note.key}
  />
  )
}



function App() {
  return (
    <div>
      <Header />
      {notes.map(creatNotes)}
      <Footer />
    </div>
  );
}

export default App;
