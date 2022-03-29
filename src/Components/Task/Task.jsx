import React, { useState, useContext } from "react";
import { ACTION_TYPES, State } from "../State/State";
import "./Task.css";

export default function Task({ el, id }) {
  const { dispatch } = useContext(State);
  const [edit, setEdit] = useState(false);
  
  const [editedValue, setEditValue] = useState(el);
  function openEdit() {
    setEdit(!edit);
  }

  function editTask(e) {
    setEditValue(e.target.value);
     e.stopPropagation()
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
    <div className="task" onClick={openEdit}>
      {edit && (
        <div  className="wrapEdit">
          <select onClick={((e) => {
          e.stopPropagation()
        })} name="Priority">
            <option value="none" selected disabled hidden>
              Անելիք
            </option>
            <option value="Low">TODO</option>
            <option value="Medium">DOING </option>
            <option value="High">DONE</option>
          </select>
         

          {edit && (
            <div className="addBtn">
              <input onClick={((e) => {
          e.stopPropagation()
        })} type="text" value={editedValue} onChange={editTask} />
              <button onClick={changeTask}>SUBMIT</button>
              <button className="delBtn" onClick={deleteTask}>
                X
              </button>
            </div>
          )}
        </div>
      )}
     

      <p>{!edit && editedValue}</p>
    </div>
  );
}
