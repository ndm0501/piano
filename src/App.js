import { useEffect } from "react";
import NoteKey from "./component/NoteKey";
import { mappedKeyToNote, sharpKeys } from "./constants";

const App = () => {
  const playNote = (note) => {
    const filename = `notes/${note}.mp3`;
    let music = new Audio(filename);
    music.play();
  };

  return (
    <div className="container">
      <div className="guide">
        <p>Play Me</p>
        <span id="audio"></span>
      </div>
      <div className="piano">
        <div className="title">PIANO</div>
        <div className="board">
          {Object.keys(mappedKeyToNote).map((key) => {
            let isSharp = false;
            if (sharpKeys.includes(key.toString())) {
              isSharp = true;
            }
            return (
              <NoteKey
                key={key}
                keyboardKey={key}
                note={mappedKeyToNote[key]}
                onClick={playNote}
                isSharp={isSharp}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
