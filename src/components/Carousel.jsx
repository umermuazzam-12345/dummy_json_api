import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Container, Typography } from "@mui/material";
import banner from "../assets/banner-img.png";

const MyCarousel = ({ products }) => {
  return (
    <Box
      sx={{
        mt: {
          md: "3rem",
          xs: "2rem",
        },
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          gap: { xs: "2rem", md: "3rem" },
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box sx={{ flex: "1", width: { md: "50%", xs: "100%" } }}>
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showIndicators={false}
            showArrows={false}
          >
            {products?.products?.map((item) => (
              <Box
                key={item?.id}
                sx={{
                  width: "100%",
                  height: "30rem",
                  // border: "4px solid #38b7ff",
                  // borderRadius: "8px",
                  img: { height: "100%", objectFit: "cover" },
                }}
              >
                <img src={item?.thumbnail} alt="thumbnail " />
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            img: { width: "25rem" },
          }}
        >
          <img src={banner} alt="Banner" />
          <Typography variant="h3">Welcom To Click Shop Store</Typography>
          <Typography variant="desc1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            temporibus, sequi vero at repellendus incidunt, assumenda quasi
            placeat odit, corporis debitis dolorum quos id ipsa architecto? Fuga
            minus dolor aut.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              "& .cta": {
                p: "10px 0",
                cursor: "pointer",
                bgcolor: "#8e2de2",
                color: "white",
                border: "1px solid #8e2de2",
                textAlign: "center",
                width: "100%",

                "&:hover": {
                  bgcolor: "white",
                  color: "#8e2de2",
                },
              },
              "& .cta2": {
                background: "#4a00e0",
                border: "1px solid #4a00e0",
                "&:hover": {
                  bgcolor: "white",
                  color: "#4a00e0",
                },
              },
            }}
          >
            <Typography className="cta">Read More</Typography>
            <Typography className="cta cta2" bgcolor="">
              Shop Now
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MyCarousel;
