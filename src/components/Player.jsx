import { useState } from "react";
export default function Player({ initiaName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initiaName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleNameChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  let edittableplayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    edittableplayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {edittableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
