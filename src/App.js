import React, { createContext, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Personal from "./Components/Personal/Personal";
import { defaultState, State, reducer, ACTION_TYPES } from "./Components/State/State";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  console.log(state);
  

  return (
    <State.Provider value={{state, dispatch}}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="/"
            element={<Home  />}
          />
          <Route path="personal" element={<Personal />} />
        </Route>
      </Routes>
    </div>
    </State.Provider>
  );
}

export default App;
