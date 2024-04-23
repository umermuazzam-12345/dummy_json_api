import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import breakpoints from "./breakpoints";
import palette from "./palette";
import components from "./components";

// Global Theme
const theme = createTheme({
	components,
	breakpoints,
	palette,
	typography,
});

export default theme;
