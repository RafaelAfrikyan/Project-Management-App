import React, { useState, useContext, useEffect, useRef } from "react";
import { ACTION_TYPES, State } from "../State/State";
import "./Add.css";

export default function Add() {
  const { dispatch } = useContext(State);
  const [inputText, setInputText] = useState("");
  const [firstAdding, setFirstAdding] = useState(false);
  const [inputCategory, setInputCategory] = useState("");
  function addTask(e) {
    setInputText(e.target.value);
  }
  function addCategory(e) {
    setInputCategory(e.target.value);
  }
  function addButton() {
    dispatch({
      type: ACTION_TYPES.ADD_TASK,
      payload: {
        text: inputText,
        category: inputCategory,
      },
    });
    setInputText("");
    setFirstAdding(!firstAdding);
  }
  const addRef = useRef(null);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (firstAdding && addRef.current && !addRef.current.contains(e.target)) {
        setFirstAdding(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [firstAdding]);
  return (
    <div className="wrap">
      {firstAdding ? (
        <div ref={addRef} className="adding">
          <input
            placeholder="Add a list..."
            type="text"
            value={inputText}
            onChange={addTask}
          />
          <input
            placeholder="Category"
            type="text"
            value={inputCategory}
            onChange={addCategory}
          />
          <button onClick={addButton}>+</button>
        </div>
      ) : (
        <div
          onClick={() => {
            setFirstAdding(!firstAdding);
          }}
          className="firstAdding"
        >
          Add a list...
        </div>
      )}
    </div>
  );
}
