import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import Add from "./Components/Add";
import Items from "./Components/Items/Items";
import Header from "./Header/Header";

export const ACTION_TYPES = {
  ADD_TASK: "ADD_TASK",
  CHANGE_STATUS: "CHANGE_STATUS",
  ADD_TASK_CONTENT: "ADD_TASK_CONTENT",
  CHANGE_TASK_VALUE: "CHANGE_TASK_VALUE,",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK:
      return [
        ...state,
        { title: action.payload.text, id: Math.random(), status: "" },
      ];
    case ACTION_TYPES.CHANGE_STATUS:
      state.map((el) => {
        if (el.id === action.payload.id) {
          el.status = action.payload.option;
        }
        return el;
      });
      return [...state];
    case ACTION_TYPES.ADD_TASK_CONTENT:
      state.map((el) => {
        if (el.id === action.payload.id) {
          el.taskText = {
            ...el.taskText,
            [action.payload.text]: action.payload.text,
          };
        }
        return el;
      });
      return [...state];
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, [
    { title: "Create JS", id: 1, status: "" },
    { title: "Create CSS", id: 2, status: "" },
    { title: "Create HTML", id: 3, status: "" },
  ]);

  console.log(state);

  return (
    <div className="App">
      <Header />
      <Add dispatch={dispatch} />
      <items className="items">
        <Items dispatch={dispatch} state={state} />
      </items>
    </div>
  );
}

export default App;
