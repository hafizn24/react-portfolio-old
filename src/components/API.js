import API_1 from "./API_1"
import API_2 from "./API_2"

import { Button } from "@mui/material"

import React, {useEffect, useState} from "react"

function API() {
  const[listname, setlistname] = useState("")
  const[listimage, setlistimage] = useState("")
  const[listspecies, setlistspecies] = useState('')
  const[liststatus, setliststatus] = useState('')
  const[randomnumber, setrandomnumber] = useState(0)
  const[listlength, setlistlength] = useState("")
  
  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character'

    const fetchData = async() =>{
      try{
        const response = await fetch(url)
        const json = await response.json()

        const tempname = []
        const tempimage = []
        const tempspecies = []
        const tempstatues = []

        setrandomnumber(Math.floor(Math.random() * json.results.length))

        for(let i in json.results){
          tempname.push(json.results[i].name)
          tempimage.push(json.results[i].image)
          tempspecies.push(json.results[i].species)
          tempstatues.push(json.results[i].status)
        }

        setlistname(tempname)
        setlistimage(tempimage)
        setlistspecies(tempspecies)
        setliststatus(tempstatues)
        setlistlength(json.results.length)
      }
      catch(error){
        console.log('error')
      }
    }

    fetchData()
  },[])

  function onClick(){
    setrandomnumber(Math.floor(Math.random() * listlength))
  }
  
  return (
    <div>
      <API_1 listname={listname[randomnumber]} listimage={listimage[randomnumber]}/>
      <Button variant="contained" color="success" onClick={onClick} style={{fontFamily:"Lato", fontWeight:"bolder"}}>
        Random
      </Button>
      <h2>Species</h2>
      <API_2 list={listspecies}/>
      <h2>Status</h2>
      <API_2 list={liststatus}/>
    </div>
  )
}

export default API