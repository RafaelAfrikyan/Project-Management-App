import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Personal from "./Components/Personal/Personal";
import Home from "./Home";
import Layout from "./Layout";

export const ACTION_TYPES = {
  ADD_TASK: "ADD_TASK",
  CHANGE_STATUS: "CHANGE_STATUS",
  ADD_TASK_CONTENT: "ADD_TASK_CONTENT",
  CHANGE_TASK: "CHANGE_TASK,",
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
    case ACTION_TYPES.CHANGE_TASK:
      state.map((el) => {
        if (el.id === action.payload.id) {
          el.taskText = {
            ...el.taskText,
            [action.payload.firstValue]: action.payload.text,
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="/"
            element={<Home dispatch={dispatch} state={state} />}
          />
          <Route path="personal" element={<Personal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
