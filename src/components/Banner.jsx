import { Box, Typography } from "@mui/material";
import BannerImg from "src/assets/banner-img.png";

const Banner = () => {
  return (
    <Box
      sx={{ backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "900px",
          margin: "auto",
          gap: "4rem",
          padding: { md: "2rem", xs: "1.5rem" },
          flexDirection: { lg: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            maxWidth: "25rem",
          }}
        >
          <Typography variant="h1">CLICK SHOP</Typography>
          <Typography variant="desc1" sx={{ color: "white" }}>
            Convallis interdum purus adipiscing dis parturient posuere ac a quam
            a eleifend montes parturient posuere curae tempor
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography
              sx={{
                padding: { md: ".5rem 2rem", xs: ".5rem 1.5rem" },
                color: "white",
                border: "1px solid white",
                cursor: "pointer",
                "&:hover": { opacity: ".8" },
              }}
            >
              Read More
            </Typography>
            <Typography
              sx={{
                padding: { md: ".5rem 2rem", xs: ".5rem 1.5rem" },
                color: "black",
                bgcolor: "white",
                border: "1px solid white",
                cursor: "pointer",
                "&:hover": { opacity: ".8" },
              }}
            >
              Shop Now
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "25rem",
            img: { width: "100%", display: "block" },
          }}
        >
          <img src={BannerImg} alt="banner image" />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
