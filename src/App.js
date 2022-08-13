import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import API from "./components/API";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"

let theme = createTheme({
  palette: {
    primary: {
      main: '#1e1b1b',
    },
    background: {
      default: '#0d153b',
    },
    text: {
      primary: '#f9fbe7',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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