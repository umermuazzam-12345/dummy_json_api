import palette from "./palette";

const BLACK = palette.common.black;
const WHITE = palette.common.white;

const typography = {
  h1: {
    fontSize: "58.5px",
    fontWeight: "500",
    lineHeight: "1.12",
    letterSpacing: "-0.6px",
    color: WHITE,

    "@media(max-width: 800px)": {
      fontSize: "50.2px",
      letterSpacing: "-0.42px",
    },
  },

  h2: {
    fontSize: "50px",
    fontWeight: "500",
    lineHeight: "1",
    letterSpacing: "-0.5px",
    textAlign: "center",
    color: "#8e2de2",

    "@media(max-width: 800px)": {
      fontSize: "35px",
      letterSpacing: "-0.35px",
    },
  },

  h3: {
    fontSize: "40.5px",
    fontWeight: "500",
    lineHeight: "1.2",
    letterSpacing: "normal",
    color: "#8e2de2",
    "@media(max-width: 1000px)": {
      fontSize: "32px",
    },
  },

  h4: {
    fontSize: "26px",
    fontWeight: "500",
    lineHeight: "1.2",
    letterSpacing: "normal",
    // color: BLACK,
    color: "#8e2de2",
  },

  h5: {
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1",
    letterSpacing: "normal",
    color: "#160221",
  },

  h6: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.3",
    color: "#81808b",
    textTransform: "uppercase",
    // textAlign: "center",

    "@media(max-width: 800px)": {
      fontSize: "13.8px",
      letterSpacing: "0.84px",
    },
  },

  title1: {
    fontSize: "17px",
    lineHeight: "1.27",
    letterSpacing: "normal",
    color: "#626262",
    fontWeight: "bold",
  },

  title2: {
    fontSize: "13.2px",
    fontWeight: "500",
    lineHeight: "1.27",
    letterSpacing: "normal",
    color: WHITE,
  },

  desc1: {
    fontSize: "15px",
    lineHeight: "1.48",
    letterSpacing: "normal",
    color: "#51535d",
    fontWeight: "500",
  },

  desc2: {
    fontSize: "13.2px",
    fontWeight: "normal",
    lineHeight: "1.27",
    letterSpacing: "normal",
    color: "#b5b5ba",
  },
  smBtn: {
    padding: ".3rem 1rem",
    cursor: "pointer",
    borderRadius: "3px",
    zIndex: "20",
    background: "black",
    color: "white",
    fontSize: "12px",
    "&:hover": {
      background: "gray",
    },
  },
};

export default typography;
