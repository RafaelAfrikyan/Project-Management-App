import React from "react";
import Item from "../ToDo_Item/Item";
import "../ToDo_Item/Item.css";

export default function FilteredJS({ filteredState }) {
  return (
    <div className="items1">
      {filteredState.map((el) => {
        return (
          <div className="item">
            <Item key={el.id} item={el} id={el.id} />
          </div>
        );
      })}
    </div>
  );
}
