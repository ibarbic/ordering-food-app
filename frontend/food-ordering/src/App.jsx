import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./component/Theme/DarkTheme";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";

/**
   @todo: 2.32.24
**/

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home/> */}
      {/* <RestaurantDetails /> */}
      <Cart/>
    </ThemeProvider>
  );
}

export default App;
