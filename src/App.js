import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import API from "./components/API";

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/api" element={<API/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;