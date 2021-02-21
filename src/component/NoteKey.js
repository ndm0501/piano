import { useEffect, useState } from "react";
import { mappedKeyToNote } from "../constants";
const NoteKey = ({ note, keyboardKey, onClick, isSharp }) => {

  //check for key press event and play note
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const note = mappedKeyToNote[e.key];
      onClick(note);
    });
  }, []);
  
  return (
    <div className={isSharp ? `keySharp ${note}` : `key ${note}`}>
      <div className="content" onClick={() => onClick(note)}>
        <p className="note">{note.replace("s", "#")}</p>
        <p className="keyboardKey">{keyboardKey}</p>
      </div>
    </div>
  );
};

export default NoteKey;
