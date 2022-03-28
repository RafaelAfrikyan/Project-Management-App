import React, { useState, useContext } from "react";
import { ACTION_TYPES, State } from "../State/State";
import "./Task.css";

export default function Task({ el, id }) {
  const {dispatch} = useContext(State)
  const [edit, setEdit] = useState(false);
  const [editedValue, setEditValue] = useState(el);
  function openEdit() {
    setEdit(!edit);
  }

  function editTask(e) {
    setEditValue(e.target.value);
  }
  function changeTask() {
    dispatch({
      type: ACTION_TYPES.CHANGE_TASK,
      payload: {
        firstValue: el,
        editedValue: editedValue,
        id: id,
      },
    });
  }

  function deleteTask() {
    dispatch({
      type: ACTION_TYPES.DELETE_TASK,
      payload: {
        id: id,
        firstValue: el,
      },
    });
  }
  console.log(editedValue);

  return (
    <div className="task">
      <button onClick={deleteTask}>delete</button>
      {!edit && editedValue}
      {edit && (
        <div className="addBtn">
          <input type="text" value={editedValue} onChange={editTask} />
          <button onClick={changeTask}>Submit</button>
        </div>
      )}
      {!edit && <button onClick={openEdit}>Edit</button>}
    </div>
  );
}
