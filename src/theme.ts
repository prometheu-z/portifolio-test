import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#394a69ff',
    },
    secondary: {
      main: '#99afdfff',
    },
  },
  typography:{
    fontFamily: "Nunito"
  }
  
});


theme = responsiveFontSizes(theme);

export default theme