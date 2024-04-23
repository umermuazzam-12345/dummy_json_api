import { Grid } from "@mui/material";
import Product from "./Product";
import Loader from "./Loader";
import ScrollToTop from "src/utils/scrollToTop";

const Products = ({ products, isLoading, isFetching }) => {
  ScrollToTop();
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <Grid container spacing={4} mt={{ xs: "1rem", md: "2rem" }}>
      {products?.products?.map((product) => (
        <Grid key={product.id} item xs={12} md={6} xl={4} xxl={3}>
          <Product key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>

    // </div>
  );
};

export default Products;
