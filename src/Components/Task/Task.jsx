import React, { useRef, useState } from "react";
import { ACTION_TYPES } from "../../App";
import "./Task.css";

export default function Task({ el, dispatch, id }) {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(el);
  function openEdit() {
    setEdit(!edit);
  }

  function addTask(e) {
    setEditValue(e.target.value);
  }
  function changeTask() {
    dispatch({
      type: ACTION_TYPES.CHANGE_TASK,
      payload: {
        text: editValue,
        id: id,
      },
    });
    openEdit()
  }

  return (
    <div className="task">
      {!edit && el}
      {edit && (
        <div>
          <input type="text" value={editValue} onChange={addTask} />
          <button onClick={changeTask}>Submit</button>
        </div>
      )}
      {!edit && <button onClick={openEdit}>Edit</button>}
    </div>
  );
}
