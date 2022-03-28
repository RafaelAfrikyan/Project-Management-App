import React, {useContext} from "react";
import "./Items.css";
import Item from "../ToDo_Item/Item";
import { State } from "../State/State";

export default function Items() {
  const { state} = useContext(State)
  return (
    <>
      {state.item.map((item) => {
        return (
          <div className="items">
            <Item
              key={item.id}
              item={item}
              id={item.id}
            />
          </div>
        );
      })}
    </>
  );
}
