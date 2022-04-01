import React, { useContext } from "react";
import "./Item.css";
import { ACTION_TYPES, State } from "../State/State";
import ItemContent from "../ItemContent/ItemContent";
import Board from "../Board/Board";
import { useNavigate } from "react-router-dom";

export default function Item({ item, id, category, status = "" }) {
  const { dispatch } = useContext(State);
  function changeStatus(e) {
    dispatch({
      type: ACTION_TYPES.CHANGE_STATUS,
      payload: {
        id: id,
        option: e.target.value,
      },
    });
    e.stopPropagation();
  }

  function deleteCard(e) {
    dispatch({
      type: ACTION_TYPES.DELETE_CARD,
      payload: {
        id: id,
      },
    });
    e.stopPropagation();
  }
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPES.GO_TO_BOARD,
      payload: {
        id: category,
      },
    });
    navigate(`/board/${item.category}`);
  };
  return (
    <div className="item">
      <div className="wrapperCard">
        <select name="Priority" onChange={changeStatus}>
          <option value="none" selected disabled hidden>
            Priority
          </option>
          <option value="TODO">TODO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
        </select>

        <h2 onClick={handleClick}>{item.title}</h2>
        <button onClick={deleteCard}>X</button>
      </div>

      {/* <p>{item.priority}</p> */}
      <p>{status}</p>

      <ItemContent key={item.id} item={item} id={item.id} />
    </div>
  );
}
