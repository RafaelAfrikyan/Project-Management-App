import React, { useContext } from "react";
import "./Item.css";
import { ACTION_TYPES, State } from "../State/State";
import ItemContent from "../ItemContent/ItemContent";

export default function Item({ item, id }) {
  const { dispatch } = useContext(State);
  function changeStatus(e) {
    dispatch({
      type: ACTION_TYPES.CHANGE_STATUS,
      payload: {
        id: id,
        option: e.target.value,
      },
    });
  }

  function deleteCard() {
    dispatch({
      type: ACTION_TYPES.DELETE_CARD,
      payload: {
        id: id,
      },
    });
  }

  return (
    <div className="item">
      <div className="wrapperCard">
      <select name="Priority" onChange={changeStatus}>
          <option value="none" selected disabled hidden>
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      <h2>{item.title}</h2>
      <button onClick={deleteCard}>X</button>
      </div>
      
      
        {/* <p>{item.priority}</p> */}
        {/* <p>{item.category}</p> */}

        <ItemContent key={item.id} item={item} id={item.id} />
   
    </div>
  );
}
