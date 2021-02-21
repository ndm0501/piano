import NoteKey from "./component/NoteKey";

const App = () => {
  const onClick = (note) => {
    console.log(note + " played!");
  };
  return (
    <div className="container">
      <div className="guide">
        <p>Play Me</p>
      </div>
      <div className="piano">
        <div className="board">
          <NoteKey note="c" keyboardKey="z" onClick={onClick} />
          <NoteKey note="d" keyboardKey="x" onClick={onClick} />
          <NoteKey note="e" keyboardKey="c" onClick={onClick} />
          <NoteKey note="f" keyboardKey="v" onClick={onClick} />
          <NoteKey note="g" keyboardKey="b" onClick={onClick} />
          <NoteKey note="a" keyboardKey="n" onClick={onClick} />
          <NoteKey note="b" keyboardKey="m" onClick={onClick} />
          <NoteKey note="cs" keyboardKey="s" onClick={onClick} isSharp />
          <NoteKey note="ds" keyboardKey="d" onClick={onClick} isSharp />
          <NoteKey note="fs" keyboardKey="g" onClick={onClick} isSharp />
          <NoteKey note="gs" keyboardKey="h" onClick={onClick} isSharp />
          <NoteKey note="as" keyboardKey="j" onClick={onClick} isSharp />
        </div>
      </div>
    </div>
  );
};

export default App;
