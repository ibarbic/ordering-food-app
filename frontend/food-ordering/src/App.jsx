
import './App.css'
import {CssBaseline, ThemeProvider} from '@mui/material';
import { darkTheme } from './component/Theme/DarkTheme';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';



/**
   @todo: 1.27.56 filter
**/



function App() {


  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
      <RestaurantDetails/>


    </ThemeProvider>

    
  );
}

export default App
