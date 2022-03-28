import { createContext, useContext } from "react";

const defaultState = {
  item: [{ title: "Create JS", id: 1, priority: "", status: "", category: "" }],
};
const ACTION_TYPES = {
  ADD_TASK: "ADD_TASK",
  CHANGE_STATUS: "CHANGE_STATUS",
  ADD_TASK_CONTENT: "ADD_TASK_CONTENT",
  CHANGE_TASK: "CHANGE_TASK,",
  DELETE_TASK: "DELETE_TASK",
  DELETE_CARD: "DELETE_CARD",
};
const State = createContext(defaultState)

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK:
      return {
        ...state,
        item: [
          ...state.item,
          {
            title: action.payload.text,
            category: action.payload.category,
            id: Math.random(),
            priority: "",
            status: "",
          },
        ],
      };
    case ACTION_TYPES.CHANGE_STATUS:
      state.item.map((el) => {
        if (el.id === action.payload.id) {
          el.priority = action.payload.option;
        }
        return el;
      });
      return { ...state };
    case ACTION_TYPES.ADD_TASK_CONTENT:
      state.item.map((el) => {
        if (el.id === action.payload.id) {
          el.taskText = {
            ...el.taskText,
            [action.payload.text]: action.payload.text,
          };
        }
        return el;
      });
      return { ...state };
    case ACTION_TYPES.CHANGE_TASK:
      state.item.map((el) => {
        if (el.id === action.payload.id) {
          el.taskText = {
            ...el.taskText,
            [action.payload.firstValue]: action.payload.editedValue,
          };
        }
        return el;
      });
      return { ...state, item: [...state.item] };
    case ACTION_TYPES.DELETE_CARD:
      state.item = state.item.filter((el) => {
        return el.id !== action.payload.id;
      });
      return { ...state };
    case ACTION_TYPES.DELETE_TASK:
      state.item.map((el) => {
        if (el.id === action.payload.id) {
          delete el.taskText[action.payload.firstValue];
        }
        return el;
      });
      return { ...state };
  }
}

export { reducer, State, defaultState, ACTION_TYPES };
