import { createContext, useContext, useState } from "react";
let filterredState = [];

const defaultState = {
  item: [
    {
      title: "Learn React",
      description: "Enhance skills",
      priority: "medium",
      id: 1,
      category: "React",
      status: "doing",
    },
    {
      title: "Learn HTML",
      description: "Enhance skills",
      priority: "low",
      id: 2,
      category: "HTML",
      status: "todo",
    },
    {
      title: "Learn JS",
      description: "Enhance skills",
      priority: "high",
      id: 3,
      category: "JS",
      status: "doing",
    },
    {
      title: "Learn CSS",
      description: "Enhance skills",
      priority: "medium",
      id: 4,
      category: "CSS",
      status: "done",
    },
  ],
};

const ACTION_TYPES = {
  ADD_TASK: "ADD_TASK",
  CHANGE_STATUS: "CHANGE_STATUS",
  ADD_TASK_CONTENT: "ADD_TASK_CONTENT",
  CHANGE_TASK: "CHANGE_TASK,",
  DELETE_TASK: "DELETE_TASK",
  DELETE_CARD: "DELETE_CARD",
  FILTER_JS: "FILTER_JS",
};
const State = createContext(defaultState);

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
    case ACTION_TYPES.FILTER_JS:
      console.log(action.payload.type);
      filterredState = state.item.filter((el) => {
        return el.category === action.payload.type;
      });
      return { ...state };
  }
}

export { reducer, filterredState, State, defaultState, ACTION_TYPES };
