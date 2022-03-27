import React, { useState } from "react";
import "./ItemContent.css";
import { ACTION_TYPES } from "../../App";
import Task from "../Task/Task";

export default function ItemContent({ dispatch, id, item }) {
  const [inputTaskText, setInputTaskText] = useState("");
  function addTask(e) {
    setInputTaskText(e.target.value);
  }
  function addButton() {
    dispatch({
      type: ACTION_TYPES.ADD_TASK_CONTENT,
      payload: {
        text: inputTaskText,
        id: id,
      },
    });
    setInputTaskText("");
  }

  return (
    <div>
      <div className="itemWrap">
        {item.taskText
          ? Object.keys(item.taskText).map((el) => {
              return <Task setInputTaskText={setInputTaskText} inputTaskText={inputTaskText}  dispatch={dispatch} addButton={addButton} item={item} el={el} id={Math.random()} />;
            })
          : null}
        <input type="text" value={inputTaskText} onChange={addTask} />
        <button onClick={addButton}>+ Add task</button>
      </div>
    </div>
  );
}
