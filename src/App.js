import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import API from "./components/API";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from '@mui/material/CssBaseline'

let theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Lato',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/rick-morty-api" element={<API/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;