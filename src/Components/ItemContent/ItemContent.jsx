import React, { useState, useContext } from "react";
import "./ItemContent.css";
import { ACTION_TYPES, State } from "../State/State";
import Task from "../Task/Task";

export default function ItemContent({ id, item }) {
  const [added, setAdded] = useState(false);
  const { dispatch } = useContext(State);
  const [inputTaskText, setInputTaskText] = useState("");
  function addTask(e) {
    setInputTaskText(e.target.value);
    e.stopPropagation();
  }
  function addButton(e) {
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPES.ADD_TASK_CONTENT,
      payload: {
        text: inputTaskText,
        id: id,
      },
    });
    setInputTaskText("");
    setAdded(!added);
  }
  const handleAdd = (e) => {
    setAdded(!added);
    e.stopPropagation();
  };

  return (
    <div className="itemWrap">
      {item.taskText
        ? Object.keys(item.taskText).map((el) => {
            return (
              <Task
                setInputTaskText={setInputTaskText}
                inputTaskText={inputTaskText}
                addButton={addButton}
                item={item}
                el={el}
                id={item.id}
              />
            );
          })
        : null}

      <div>
        {!added && (
          <button class="button-63" onClick={handleAdd}>
            +
          </button>
        )}

        {added && (
          <div className="addTask">
            <input type="text" value={inputTaskText} onChange={addTask} />
            <button onClick={addButton}>+Add </button>
          </div>
        )}
      </div>
    </div>
  );
}
