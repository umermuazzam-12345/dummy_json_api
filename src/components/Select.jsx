import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const MySelect = ({ title, listItems }) => {
  const [size, setSize] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <FormControl
      size="small"
      fullWidth
      sx={{ "& .MuiInputBase-root": { borderRadius: "40px" } }}
    >
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={size}
        label={title}
        onChange={handleChange}
      >
        {listItems.map((item) => (
          <MenuItem key={item.id} value={item.sz}>
            {item.sz}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
