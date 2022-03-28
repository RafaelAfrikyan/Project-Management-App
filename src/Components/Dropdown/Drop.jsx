import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { State } from "../State/State";


export default function BasicSelect() {
  const [category, setCategory] = React.useState("");
  const { dispatch, state } = useContext(State);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

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
              return <MenuItem  value={el.category}>{el.category}</MenuItem>;
            }
            return el;
          })}

          
        </Select>
      </FormControl>
    </Box>
  );
}
