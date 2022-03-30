import React, {useContext} from "react";
import "./Items.css";
import Item from "../ToDo_Item/Item";
import { State } from "../State/State";

export default function Items() {
  const { state} = useContext(State)
  return (
    <div className="items1">
      {state.item.map((el) => {
        return (
          <div key={el.id}>
            <Item
              key={el.id}
              item={el}
              id={el.id}
            />
          </div>
        );
      })}
    </div>
  );
}
