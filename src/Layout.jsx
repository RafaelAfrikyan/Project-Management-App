import React from "react";
import { Outlet } from "react-router-dom";
import Add from "./Components/AddCard/Add";
import MenuBar from "./Components/MenuBar/MenuBar";
import Header from "./Header/Header";
import "./Layout.css";

export default function Layout({ filteredState }) {
  return (
    <>
      <div className="layout">
        <header>
          <Header filteredState={filteredState} />
          <div className="menuAdd">
            <Add />
          </div>
        </header>
      </div>
      <Outlet />
    </>
  );
}
