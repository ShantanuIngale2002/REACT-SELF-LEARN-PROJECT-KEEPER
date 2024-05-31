import { React, useState } from "react";

// material ui's
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
// files
import Addcards from "./AddCards";


export default function Createarea() {

    // states initiations
    const [count, setCount] = useState(1);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [cards, setCards] = useState([]);

    // after change in inputs
    function handleChange(event) {
        // according to name update value
        const { name, value } = event.target;
        if (name === "title") {
            setTitle(value);
        } else if (name === "content") {
            setDesc(value);
        }
    };

    // after submit is cliked
    function handleSubmit(event) {
        // refresh prevent
        event.preventDefault();
        // no need of same title note
        let cardsContain = false;
        cardsContain = cards.some((item) => {
            if (item.title === title) { return true; }
        });
        // update state inc. new note
        if (title.length > 0 && !cardsContain) {
            setCards(prevValue => {
                return [...prevValue, { id: count, title: title, content: desc }];
            })
            // update states
            setTitle("");
            setDesc("");
            setCount(count + 1);
        }
    }

    // delete note "passed as prop"
    function deleteNote(index) {
        setCards(prevValue => {
            return prevValue.filter((item) => {
                return (item.id != index);
            })
        });
        // set count 0 and collapse the text area, button if theres 0 notes remaining.
        if (cards.length === 1) {
            setExpanded(false);
            setCount(1);
        };
    }

    // handling the click of title input to zoom the desc and add button
    const [expanded, setExpanded] = useState(false);
    function handleTitleClick(event) {
        setExpanded(true);
    }

    // returns this body
    return (
        <div>
            <form className="create-note">
                {/* use expanded state to handle placeholder and when clicked change state */}
                <input name="title" placeholder={expanded ? "Title" : "Tap here .."} value={title}
                    onClick={handleTitleClick}
                    onChange={handleChange} />
                {/* show text area if only if note is clicked ie. conditional handling*/}
                {/* also handle the rows to reduce area take */}
                {expanded && <textarea name="content" placeholder="Take a note..." value={desc} rows={expanded ? 3 : 0}
                    onChange={handleChange} />
                }
                {/* general button */}
                {/* <button onClick={handleSubmit}>
                    <NoteAddIcon />
                </button> */}

                {/* using mui Fab button instead general button 
                which zooms in if only if expanded is true */}
                <Zoom in={expanded}>
                    <Fab onClick={handleSubmit}>
                        <NoteAddIcon />
                    </Fab>
                </Zoom>

            </form>

            {/* passing cards and function to delete note */}
            <Addcards allNotes={cards} deleteNote={deleteNote} />

        </div>
    );
}

