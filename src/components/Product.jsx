import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ScrollToTop from "src/utils/scrollToTop";

const Product = ({ product }) => {
  // on navigation scroll to top on new screen
  ScrollToTop();

  return (
    <Box
      mb={{
        xs: "1rem",
        md: "2rem",
        background: "white",
        padding: "16px",
        transition: ".3s ease",

        "&:hover": {
          boxShadow: "4px 6px 8px #959595",
          transform: "scale(1.015)",
        },
      }}
    >
      <Link to={`/product/${product.id}`}>
        <Box
          sx={{
            height: "14rem",
            cursor: "pointer",
            bgcolor: "aliceblue",
            "&:hover": { opacity: ".8" },
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              mb={"1rem"}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { md: "190px", xs: "250px" },
              }}
            >
              {product.title}
            </Typography>
            <Typography variant="h6">{product.category}</Typography>
          </Box>
          <Typography variant="h4" fontSize={"17px"}>
            {product.price} $
          </Typography>
        </Box>
        <Button sx={{ mt: "1rem" }}>View Details</Button>
      </Link>
    </Box>
  );
};

export default Product;
