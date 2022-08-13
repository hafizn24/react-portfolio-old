import API_1 from "./API_1"
import API_2 from "./API_2"

import React, {useEffect, useState} from "react"

function API() {
  const[listname, setlistname] = useState("")
  const[listimage, setlistimage] = useState("")
  const[listspecies, setlistspecies] = useState('')
  const[liststatus, setliststatus] = useState('')
  
  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character'

    const fetchData = async() =>{
      try{
        const response = await fetch(url)
        const json = await response.json()

        console.log(json)

        const tempname = []
        const tempimage = []
        const tempspecies = []
        const tempstatues = []

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
      }
      catch(error){
        console.log('error')
      }
    }

    fetchData()
  },[])

  return (
    <div>
        <API_1 listname={listname[1]} listimage={listimage[1]}/>
        <API_2 list={listspecies}/>
        <API_2 list={liststatus}/>
    </div>
  )
}

export default API