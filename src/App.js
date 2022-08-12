import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import API from "./components/API";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import React, {useEffect, useState} from "react"

function App() {
  const [character, setCharacter] = useState("")
  const [image, setImage] = useState("")
  const species = []
  
  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character'

    const fetchData = async() =>{
      try{
        const response = await fetch(url)
        const json = await response.json()
        setCharacter(json.results[0].name)
        setImage(json.results[0].image)

        let len = json.results.length
        let index = 0

        while(index != len){
          console.log(json.results[index].species)
          index += 1
        }

        console.log(species)
        console.log(json)
      }
      catch(error){
        console.log('error')
      }
    }

    fetchData()
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/api" element={<API character={character} image={image}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;