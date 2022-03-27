import React, { useRef, useState } from "react";
import { ACTION_TYPES } from "../../App";
import "./Task.css";

export default function Task({ el, dispatch, id }) {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(el);
  function openEdit() {
    setEdit(!edit);
  }

  const submitValue = (e) => {
    setEditValue(e.target.value);
  };

  const changeValue = () => {
    dispatch({
      type: ACTION_TYPES.CHANGE_TASK_VALUE,
      payload: {
        text: editValue,
        id: id,
      },
    });
  };

  return (
    <div className="task">
      {!edit && el}
      {edit && (
        <div>
          <input type="text" value={el} onChange={submitValue} />{" "}
          <button onClick={changeValue}>Submit</button>
        </div>
      )}
      {!edit && <button onClick={openEdit}>Edit</button>}
    </div>
  );
}
