import React from "react";
import "./Items.css";

import Item from "../ToDo_Item/Item";

export default function Items({ dispatch, state }) {
  return (
    <>
      {state.map((item) => {
        return (
          <div className="items">
          <Item item={item} dispatch={dispatch} state = {state} id={item.id} key={item.id} />
          </div>
        );
      })}
    </>
  );
}
