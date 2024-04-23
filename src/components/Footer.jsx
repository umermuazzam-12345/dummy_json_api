import { Box, Container, Typography } from "@mui/material";
import logo from "src/assets/logo5.jpg";

const style = {
  wrapper: {
    background: "white",
    marginTop: "2rem",
    textAlign: "center",
  },
  container: {},
  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: { md: "6rem 0", xs: "4rem 0" },
    flexDirection: { lg: "row", xs: "column" },
    // gap: "2rem",
  },
  logo: {
    mb: "2rem",
    flex: "1.5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // gap: "1rem",
    img: {
      objectFit: "cover",
      width: "150px",
      height: "50px",
    },
  },
  navbar: {
    flex: "3",

    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    // gap: "2rem",
    ul: {
      marginBottom: "2rem",
      width: { md: "14rem", xs: "10rem" },
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "16px",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "1.3",
      color: "rgb(102, 102, 102)",
      textTransform: "uppercase",
      li: {
        "&:nth-child(1)": { color: "rgb(32, 44, 64)", fontSize: "1rem" },
        cursor: "pointer",
        "&:hover": {
          opacity: ".8",
        },
        "&.login": {
          background: "#38b7ff",
          padding: "10px 16px",
          borderRadius: "5px",
          border: "1px solid #38b7ff",
          color: "white",
          "&:hover": {
            background: "none",
            color: "#38b7ff",
          },
        },
      },
    },
  },
  copy: {
    padding: "1rem",
    background: "#8e2de2",
    color: "white",
  },
};

const Footer = () => {
  return (
    <Box sx={style.wrapper}>
      <Container maxWidth="xxl" sx={style.container}>
        <Box sx={style.footer}>
          <Box sx={style.logo}>
            <img src={logo} alt="logo" />
            <Typography variant="h4">CLICK SHOP </Typography>
          </Box>
          <Box sx={style.navbar}>
            <ul>
              <li>Company</li>
              <li>Services</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>

            <ul>
              <li>Services</li>
              <li>Blockchain Solutions</li>
              <li>Artificial Intelligence</li>
              <li>System Architecture</li>
              <li>Application Development</li>
              <li>Decentralized Applications</li>
            </ul>

            <ul>
              <li>Get in touch</li>
              <li>Plaza # 305/37, H-3 Block, Phase 2, Johar Town, Lahore</li>
              <li>(+92) 331 9595967</li>
            </ul>
          </Box>
        </Box>
      </Container>
      <Box sx={style.copy}>
        &#169; 2024 Lahore Pk, Magnus Mage pvt, All rights reserved
      </Box>
    </Box>
  );
};

export default Footer;
