import React from "react";
import Add from "./Components/Add";
import Items from "./Components/Items/Items";
import "./Home.css";

export default function Home({ dispatch, state }) {
  return (
    <div>
      <Add dispatch={dispatch} />
      <items className="items">
        <Items dispatch={dispatch} state={state} />
      </items>
    </div>
  );
}
