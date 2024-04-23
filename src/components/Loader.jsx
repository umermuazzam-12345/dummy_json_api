import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "20rem",
        alignItems: "center",
        justifyContent: "center",
        span: {
          width: "100px !important",
          height: "100px !important",
        },
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
