import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { State } from "../State/State";
import Item from "../ToDo_Item/Item";

export default function Board({ filteredState }) {
  const { state, dispatch } = useContext(State);
  const { id } = useParams();

  return (
    <div>
      {filteredState.map((el) => {
        return (
          <div  className="items1">
            <Item key={el.id} item={el} id={el.id} status={"TODO"} />
            <Item key={el.id} item={el} id={el.id} status={"DOING"} />
            <Item key={el.id} item={el} id={el.id} status={"DONE"} />
          </div>
        );
      })}
    </div>
  );
}
