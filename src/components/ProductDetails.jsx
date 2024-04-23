import { Box, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MySelect from "./Select";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import getReq from "src/apis/getReq";
import Loader from "./Loader";
import ScrollToTop from "src/utils/scrollToTop.js";
import { Carousel } from "react-responsive-carousel";

// static values for size and quantity select field
const size = [
  {
    id: 1,
    sz: "Extra Small",
  },
  {
    id: 2,
    sz: " Small",
  },
  {
    id: 3,
    sz: "Medium",
  },
  {
    id: 4,
    sz: "Large",
  },
];
const qnty = [
  {
    id: 1,
    sz: 1,
  },
  {
    id: 2,
    sz: 2,
  },
  {
    id: 3,
    sz: 3,
  },
  {
    id: 4,
    sz: 4,
  },
];

const ProductDetails = () => {
  const navigate = useNavigate();
  // geting base url from dot env file
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();

  // implementaion of react query for getting categories
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: () => getReq(`${baseUrl}products/${id}`),
  });

  // on navigation scroll to top on new screen
  ScrollToTop();

  // show loader while loading
  if (isLoading || isFetching) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </Box>
    );
  }

  return (
    <Box sx={{ background: "#b3b3b329" }}>
      <Navbar />
      <Container maxWidth="xxl">
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            background: "white",
            borderRadius: "8px",
            marginTop: "2rem",
            padding: { md: "24px", xs: "8px" },
            boxShadow: "2px 4px 7px #bfb9b9",
            flexDirection: { lg: "row", xs: "column" },
            position: "relative",
          }}
        >
          <Typography
            onClick={() => navigate(-1)}
            variant="smBtn"
            sx={{
              position: "absolute",
              top: ".5rem",
              left: ".5rem",
            }}
          >
            &#8678; Back
          </Typography>
          <Box
            sx={{
              flex: "1.4",
              background: "white",
            }}
          >
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showIndicators={false}
              showArrows={false}
            >
              {data?.images?.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    width: "100%",
                    height: { md: "25rem", xs: "unset" },

                    img: { height: "100%", objectFit: "contain" },
                  }}
                >
                  <img src={item} alt="Detail image" />
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: "1",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="title1">
              Category :{" "}
              <Typography variant="desc1">{data?.category}</Typography>
            </Typography>
            <Typography variant="title1">
              Brand : <Typography variant="desc1">{data?.brand}</Typography>
            </Typography>
            <Typography variant="title1">
              Product : <Typography variant="desc1">{data?.title}</Typography>
            </Typography>
            <Typography variant="title1">
              Rating :{" "}
              <Typography
                sx={{
                  bgcolor: "#14b714a8",
                  display: "inline",

                  padding: "6px 16px",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                ⭐ {data?.rating}
              </Typography>
            </Typography>
            <hr />
            <Typography variant="desc1">
              <b> Description</b> : {data?.description}
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem", maxWidth: "300px" }}>
              <MySelect title="size" listItems={size} />
              <MySelect title="Quantity" listItems={qnty} />
            </Box>
            <hr />
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
                  fontSize: { xs: ".8rem", md: "1rem" },

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
              <Typography className="cta">Buy Now</Typography>
              <Typography className="cta cta2" bgcolor="">
                Add to Favorite
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ProductDetails;
