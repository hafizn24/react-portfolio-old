import React, {useEffect, useState} from "react"

function API_1() {
  const [character, setCharacter] = useState("")
  const [image, setImage] = useState("")
  
  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character'

    const fetchData = async() =>{
      try{
        const response = await fetch(url)
        const json = await response.json()
        setCharacter(json.results[0].name)
        setImage(json.results[0].image)
        console.log(json)
      }
      catch(error){
        console.log('error')
      }
    }

    fetchData()
  },[])

  return (
    <div>
        {character}
        <img src={image} alt="Image" />
    </div>
  )
}

export default API_1