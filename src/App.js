import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FilteredJS from "./Components/FilterredJS/FilterredJS";
import FormPage from "./LogInPage/LogIn";
import Personal from "./Components/Personal/Personal";
import {
  defaultState,
  State,
  reducer,
  filteredState,
} from "./Components/State/State";
import Home from "./Home";
import Layout from "./Layout";
import FirstPage from "./Components/FistPage/FirstPage";
import Task from "./Components/Task/Task";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  console.log({ state });
  console.log(state.isLoggedIn);

  return (
    <State.Provider value={{ state, dispatch }}>
      <div className="App">
        <Routes>
          <React.Fragment>
            <Route path="/" element={<FirstPage />} />
            <Route path="login" element={<FormPage />} />
          </React.Fragment>

          <Route
            path="/board"
            element={<Layout filteredState={filteredState} />}
          >
            <Route index path="/board" element={<Home />} />
            <Route path="personal" element={<Personal />} />
            
            <Route
              path=":category"
              element={<FilteredJS filteredState={filteredState} />}
            />
          </Route>
        </Routes>
      </div>
    </State.Provider>
  );
}

export default App;
