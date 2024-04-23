import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import getReq from "src/apis/getReq";
import Search from "src/components/Search";
import MyPagination from "src/components/MyPagination";
import MyProducts from "src/components/Products";
import { Box, Container } from "@mui/material";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import MyCarousel from "src/components/Carousel";
import Loader from "src/components/Loader";
import Banner from "src/components/Banner";

function Home() {
  // geting base url from dot env file
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // setting pagination variables
  const [searchParams, setSearchParams] = useSearchParams({
    skip: 0,
    limit: 10,
  });

  // request url variables
  const skip = parseInt(searchParams.get("skip") || 0);
  const limit = parseInt(searchParams.get("limit") || 0);
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  // implementaion of react query for getting categories
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getReq(`${baseUrl}products/categories`),
  });

  // implementaion of react query for getting products
  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["products", limit, skip, q, category],
    queryFn: async () => {
      let url = `${baseUrl}products/search?limit=${limit}&skip=${skip}&q=${q}`;
      if (category) {
        url = `${baseUrl}products/category/${category}?limit=${limit}&skip=${skip}`;
      }
      return await fetch(url).then((res) => res.json());
    },
    placeholderData: keepPreviousData,
    staleTime: 10000, // after ten seconds the data will be stale
  });

  // event handling for pagination
  const handleMove = (moveCount) => {
    setSearchParams((pre) => {
      pre.set("skip", moveCount * 10);
      return pre;
    });
  };

  return (
    <Box sx={{ background: "#b3b3b329" }}>
      <Navbar />

      {/* <MyCarousel products={products} /> */}

      {/* banner section  */}
      <Banner />

      {/* on loading data show sppiner loader  */}

      <Container maxWidth="xxl" sx={{ mt: { md: "2rem", xs: "2rem" } }}>
        {/* Search filter component  */}
        <Search
          setSearchParams={setSearchParams}
          categories={categories}
          category={category}
          q={q}
        />
        {/* {(isLoading || isFetching) && <Loader />} */}

        {/* Products component  */}
        <MyProducts
          products={products}
          isFetching={isFetching}
          isLoading={isLoading}
        />

        {/* pagination component  */}

        <MyPagination
          q={q}
          skip={skip}
          limit={limit}
          handleMove={handleMove}
          products={products}
        />
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
