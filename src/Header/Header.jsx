import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BasicSelect from "../Components/Dropdown/Drop";
import { ACTION_TYPES, State } from "../Components/State/State";

import "./Header.css";

export default function Header({ filteredState }) {
  const { dispatch } = useContext(State);
  const handleLogOut = () => {
    dispatch({
      type: ACTION_TYPES.LOG_OUT,
      payload: {
        type: false,
      },
    });
  };
  return (
    <header className="masthead">
      <div className="logo">
        <BasicSelect filteredState={filteredState} />

        <h1>
          <Link to="/board">Trello</Link>
        </h1>
        <Link to="/">
          <button onClick={handleLogOut}>LogOut</button>
        </Link>
      </div>
    </header>
  );
}
