import React, { useState } from "react";
import { ACTION_TYPES } from "../App";

export default function Add({ dispatch }) {
  const [inputText, setInputText] = useState("");
  function addTask(e) {
    setInputText(e.target.value);
  }
  function addButton() {
    dispatch({
      type: ACTION_TYPES.ADD_TASK,
      payload: {
        text: inputText,
      },
    });
    setInputText("");
  }
  return (
    <div>
      <input type="text" value={inputText} onChange={addTask} />
      <button onClick={addButton}>Add</button>
    </div>
  );
}
