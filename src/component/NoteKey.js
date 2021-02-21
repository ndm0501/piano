const NoteKey = ({ note, keyboardKey, onClick, isSharp }) => {
  return (
    <div className={isSharp ? `keySharp ${note}` : `key {note}`}>
      <div className="content" onClick={() => onClick(note)}>
        <p className="note">{note.replace("s", "#")}</p>
        <p className="keyboardKey">{keyboardKey}</p>
      </div>
    </div>
  );
};
export default NoteKey;
