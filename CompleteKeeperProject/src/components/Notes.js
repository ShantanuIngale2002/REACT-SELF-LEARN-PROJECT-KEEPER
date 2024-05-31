import React from "react";

// muis
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import DeleteIcon from "@mui/icons-material/Delete";

export default function Notes(props) {

    // since prop.del() gets called direcly w/o even click
    // to prevent it make inside another function that triggered on click
    function deleteNoteCard(event) {
        // prevents page refresh
        event.preventDefault();
        // passing id to filter out the note ie. delete note
        props.deleteNote(props.id);
    }

    // returns this body
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {/* general button */}
            {/* <button onClick={deleteNoteCard}>
                <DeleteIcon />
            </button> */}

            {/* using mui fab instead genearl button */}
            <Zoom in={true}>
                <Fab onClick={deleteNoteCard}>
                    <DeleteIcon />
                </Fab>
            </Zoom>
        </div>
    );
};