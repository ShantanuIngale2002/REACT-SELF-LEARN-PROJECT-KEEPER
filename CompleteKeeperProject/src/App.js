import React from "react";
import NoteAltIcon from '@mui/icons-material/SpeakerNotes';

import "../public/styles.css";
import Createarea from "./components/Createarea";

const currYear = new Date().getFullYear();

export default function App() {

  return (
    <div className="App">
      <header>
        <h1> <NoteAltIcon /> KEEPER</h1>
      </header>

      {/* to add cards from user cards */}
      <Createarea />

      {/* below is code for creating the keeper cards from data allNotes.js */}
      {/* <Addcards allNotes={allNotes} /> */}

      <footer>
        <p>Copyright @{currYear}</p>
      </footer>
    </div>
  );
}
