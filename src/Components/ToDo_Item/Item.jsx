import React from "react";
import "./Item.css";
import { ACTION_TYPES } from "../../App";
import ItemContent from "../ItemContent/ItemContent";

export default function Item({ item, dispatch, id }) {
  function changeStatus(e) {
    dispatch({
      type: ACTION_TYPES.CHANGE_STATUS,
      payload: {
        id: id,
        option: e.target.value,
      },
    });
  }

  return (
    <div className="item">
      <div className="custom-select">
        <h2>{item.title}</h2>
        <p>{item.status}</p>
        <select name="Priority" onChange={changeStatus}>
          <option value="none" selected disabled hidden>
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <ItemContent key={item.id} item={item} dispatch={dispatch} id={item.id} />
    </div>
  );
}
