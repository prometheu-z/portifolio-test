import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#526280',
    },
    secondary: {
      main: '#5a3e8fff',
    },
  },
  typography:{
    fontFamily: "Nunito"
  }
  
});


theme = responsiveFontSizes(theme);

export default theme