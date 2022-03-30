import React from "react";
import Add from "./Components/AddCard/Add";
import Items from "./Components/Items/Items";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <items className="items">
        <Items />
        {/* {logClick && <FormP />} */}
      </items>
    </div>
  );
}
