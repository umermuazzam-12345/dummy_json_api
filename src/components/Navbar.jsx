import { Box, Container } from "@mui/material";
import logo from "src/assets/logo5.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const style = {
  background: "black",
  zIndex: "100",
  transition: ".5s ease",
  // borderBottom: "1px solid #dfd6d6",
  "&:hover": {
    boxShadow: "0px 5px 12px #b3adad",
    // background: "aliceblue",
    transition: " ease .5s",
  },

  // toggle mobile nav bar
  "& .toggle": {
    display: { md: "block", xs: "none" },
  },
  warpper: {
    display: "flex",
    justifyContent: { md: "space-between", xs: "center" },
    alignItems: "center",
    padding: "10px 0",
    position: "relative",
  },

  logo: {
    cursor: "pointer",
    img: {
      objectFit: "cover",
      filter: "invert(1)",
      width: { md: "160px", xs: "150px" },
      height: { md: "70px", xs: "50px" },
      // borderRadius: "50%",
    },
  },
  hideNav: {
    display: "none",
  },
  navbar: {
    position: { xs: "fixed", md: "relative" },
    top: { xs: "4rem", md: "0" },
    right: { xs: "2rem", md: "0" },
    padding: { xs: "4rem", md: "0" },
    background: { xs: "#38b7ff", md: "none" },
    zIndex: "10",

    ul: {
      display: "flex",
      alignItems: "center",
      flexDirection: { md: "row", xs: "column" },
      gap: { md: "16px", xs: "24px" },
      fontSize: { xs: "16px", lg: "16px", md: "13px" },
      fontWeight: "500",
      lineHeight: "1.3",
      color: { md: "#dddddd", xs: "white" },
      textTransform: "uppercase",
      li: {
        cursor: "pointer",
        "&:hover": {
          // color: { md: "#38b7ff", xs: "white" },
          opacity: ".8",
        },
        "&.login": {
          background: "#8e2de2",
          padding: "10px 16px",
          borderRadius: "5px",
          border: "1px solid #8e2de2",
          color: "white",
          "&:hover": {
            background: "none",
            color: { md: "#8e2de2", xs: "purple" },
          },
        },
      },
    },
  },

  "&.sticky": {
    position: { md: "sticky", xs: "unset" },
    top: "0",
    animation: "animateHeader .5s ease forwards",
    boxShadow: "0px 5px 12px #b3adad",
  },
  "@keyframes animateHeader": {
    "0%": {
      transform: "translateY(-180px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
};

const Navbar = () => {
  // variable to set header position to sticky on certain scroll amount
  const [scrolled, setScrolled] = useState(false);

  // scroll handler to check window scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 180) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // use effect for calling listener on window scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={style} className={scrolled ? "sticky" : ""}>
      <Container maxWidth="xxl" sx={style.warpper}>
        <Box sx={style.logo}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </Box>

        {/* desktop navbar  */}
        <Box sx={style.navbar} className="toggle">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>About</li>
            <li>Contact</li>
            <li>Store</li>
            <li>Categories</li>
            <li className="login">Login</li>
          </ul>
        </Box>

        {/* mobile nav bar */}
        <Box
          sx={{
            display: {
              md: "none",
              xs: "block",
              position: "absolute",
              top: ".5rem",
              right: ".5rem",
            },
          }}
        >
          <MobileNav />
        </Box>
        {/* <Box sx={style.navbar}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Store</li>
              <li>Categories</li>
              <li className="login">Login</li>
            </ul>
          </Box>  */}
      </Container>
    </Box>
  );
};

export default Navbar;
