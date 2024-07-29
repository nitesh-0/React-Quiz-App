import {  useState } from "react";

export default function Start({ setUsername }) {
    const [name, setName] = useState("")
  

  const handleClick = () => {
     setUsername(name);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        onChange={(e) => {
            setName(e.target.value)
        }}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}