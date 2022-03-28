import React from "react";
import { Outlet } from "react-router-dom";
import Add from "./Components/AddCard/Add";
import MenuBar from "./Components/MenuBar/MenuBar";
import Header from "./Header/Header";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <div className="layout">
        <header>
          <Header />
          <div className="menuAdd">
          <MenuBar />
          <Add />
          </div>
        </header>
      </div>
      <Outlet />
    </>
  );
}
