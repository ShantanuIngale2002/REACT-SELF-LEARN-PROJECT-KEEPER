import React from "react";
import Notes from "./Notes";

export default function addCardFromFile(props) {
    // returns this body
    return (
        <div className="mainContent">
            {/* mapping all notes in notes array from prop */}
            {props.allNotes.map((note) => {
                let cnt = note.content;
                let limit = 20;
                if (cnt.length > limit) {
                    cnt = cnt.substring(0, limit) + "...";
                }
                // return ie. add note passing following info
                return (
                    <Notes
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        content={cnt}
                        deleteNote={props.deleteNote}
                    />
                );
            })}
        </div>
    );
}

