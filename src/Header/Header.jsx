import * as React from "react";
import { Link } from "react-router-dom";
import BasicSelect from "../Components/Dropdown/Drop";
import Filter from "../Components/Dropdown/Drop";
import "./Header.css";

export default function Header() {
  return (
    <header className="masthead">
      <div className="boards-menu">
        

        <BasicSelect />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">Trello</Link>
        </h1>
      </div>

      
    </header>
  );
}
