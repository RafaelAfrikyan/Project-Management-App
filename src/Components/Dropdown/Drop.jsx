import React, { useContext, useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { State, ACTION_TYPES } from "../State/State";

export default function BasicSelect() {
  const [category, setCategory] = useState("");
  const { dispatch, state } = useContext(State);

  const handleChange = (event) => {
    setCategory(event.target.value);

    dispatch({
      type: ACTION_TYPES.FILTER_JS,
      payload: {
        type: event.target.value,
      },
    });
  };

  // function filterJS() {

  // }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleChange}
        >
          {state.item.map((el) => {
            if (el.category) {
              return (
                <MenuItem key={el.id} value={el.category}>
                  {el.category}
                </MenuItem>
              );
            }
            return el;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
