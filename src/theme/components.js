const components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "18.8px",
        paddingRight: "18.8px",
        // "@media(max-width: 400px)": {
        // 	padding: "20px",
        // },
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        width: "100%",
        color: "white",
        fontSize: "1.2rem",
        background: "black",
        // backgroundImage:
        //   "linear-gradient(to right, #38b7ff96 0%, #38b7ff 51%, #25acf9 100%)",
        border: "1px solid black",
        "&:hover": {
          backgroundImage: "none",
          color: "black",
        },
      },
    },
  },
};

export default components;
