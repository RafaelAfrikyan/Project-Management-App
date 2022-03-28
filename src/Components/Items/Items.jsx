import React, {useContext} from "react";
import "./Items.css";
import Item from "../ToDo_Item/Item";
import { State } from "../State/State";

export default function Items() {
  const { state} = useContext(State)
  return (
    <div className="items">
      {state.item.map((item) => {
        return (
          <div >
            <Item
              key={item.id}
              item={item}
              id={item.id}
            />
          </div>
        );
      })}
    </div>
  );
}
