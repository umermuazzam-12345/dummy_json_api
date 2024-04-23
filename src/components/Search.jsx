import debounce from "lodash.debounce";
import Category from "./Category";
import { Box, TextField, Typography } from "@mui/material";

const Search = ({ setSearchParams, categories, category, q }) => {
  return (
    <Box>
      <Box>
        <Typography variant="h3"> CLICK SHOP</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          mt: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ flex: 3, position: "relative" }}
        >
          <TextField
            type="search"
            sx={{
              width: "100%",
              "& .MuiInputBase-root": { borderRadius: "40px" },
            }}
            id="outlined-basic"
            label="Search Our Produtcs"
            variant="outlined"
            onChange={debounce((e) => {
              setSearchParams((pre) => {
                pre.set("q", e.target.value);
                pre.set("skip", 0);
                pre.delete("category");
                return pre;
              });
            }, 1000)}
          />
        </Box>

        {/* Select category component  */}
        <Category
          setSearchParams={setSearchParams}
          category={category}
          categories={categories}
        />
      </Box>
    </Box>
  );
};

export default Search;
