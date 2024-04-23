import { Box, Button } from "@mui/material";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";

const MyPagination = ({ skip, q, handleMove, products }) => {
  const [page, setPage] = useState(skip / 10 + 1);
  const handleChange = (event, value) => {
    setPage(value);
    handleMove(value - 1);
  };

  return (
    <>
      <Box
        sx={{
          mt: "3rem",
          display: "flex",
          justifyContent: "flex-end",
          "& .MuiButtonBase-root": {
            fontSize: { md: "1.3rem", xs: ".8rem" },
            "&.Mui-selected": {
              background: "#8e2de2",
            },
          },
          "& .MuiSvgIcon-root": {
            width: { md: "1.5rem", xs: "1rem" },
            height: { md: "1.5rem", xs: "1rem" },
          },
        }}
      >
        {/* {!q && ( */}
        <Pagination
          count={Math.ceil(products?.total / 10)}
          page={page}
          onChange={handleChange}
        />
        {/* )} */}
      </Box>
    </>
  );
};

export default MyPagination;
