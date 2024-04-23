import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Category = ({ setSearchParams, categories, category }) => {
  const handleClearInput = () => {
    setSearchParams((pre) => {
      pre.delete("category");
      return pre;
    });
    // console.log("handleClearInput");
  };

  return (
    <>
      <FormControl
        sx={{
          flex: 1,
          position: "relative",
          "& .MuiInputBase-root": { borderRadius: "40px" },
        }}
      >
        <InputLabel id="demo-simple-select-label">Select category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Select category"
          onChange={(e) => {
            setSearchParams((pre) => {
              pre.set("skip", 0);
              pre.delete("q");
              pre.set("category", e.target.value);
              return pre;
            });
          }}
        >
          {/* mapping all over the categories  */}
          {categories?.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        <Box
          onClick={handleClearInput}
          sx={{
            position: "absolute",
            right: "2.5rem",
            top: "30%",
            cursor: "pointer",
            fontSize: "1rem",
            "&:hover": { opacity: ".7" },
          }}
        >
          X
        </Box>
      </FormControl>
    </>
  );
};

export default Category;
