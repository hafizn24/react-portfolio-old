import CharacterCard from './CharacterCard'
import StatisticsCard from './StatisticsCard'
import Chart from './Chart'
import { Button } from "@mui/material"
import React, {useEffect, useState} from "react"
import { Box, flexbox, maxWidth } from '@mui/system'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography';

function API() {
  const[listname, setlistname] = useState("")
  const[listimage, setlistimage] = useState("")
  const[listspecies, setlistspecies] = useState('')
  const[liststatus, setliststatus] = useState('')
  const[randomnumber, setrandomnumber] = useState(0)
  const[listlength, setlistlength] = useState("")
  const[listgender, setlistgender] = useState("")
  const[listlocation, setlistlocation] = useState("")
  
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
        const templocation = []
        const tempgender = []

        setrandomnumber(Math.floor(Math.random() * json.results.length))

        for(let i in json.results){
          tempname.push(json.results[i].name)
          tempimage.push(json.results[i].image)
          tempspecies.push(json.results[i].species)
          tempstatues.push(json.results[i].status)
          tempgender.push(json.results[i].gender)
          templocation.push(json.results[i].location.name)
        }

        setlistname(tempname)
        setlistimage(tempimage)
        setlistspecies(tempspecies)
        setliststatus(tempstatues)
        setlistlength(json.results.length)
        setlistgender(tempgender)
        setlistlocation(templocation)
        
        console.log(typeof(tempname))
        console.log(tempname)
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
    <Box style={{
      display:"flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          maxWidth: "300px",
          p: 1,
        }}
      >
        <CharacterCard 
        name={listname[randomnumber]} 
        image={listimage[randomnumber]}  
        gender={listgender[randomnumber]}
        location={listlocation[randomnumber]}
        species={listspecies[randomnumber]}
        status={liststatus[randomnumber]}
        />
        <Button variant="contained" color="success" onClick={onClick} style={{fontFamily:"Lato", fontWeight:"bolder"}}>
          Random
        </Button>
      </Box>
      <Divider style={{width:'95%'}}/>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          maxWidth: "350px",
          p: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="div" variant="h4">
          Species
        </Typography>
        <Chart list={listspecies} title="Species"/>
        <br />
        <StatisticsCard list={listspecies} title="Species"/>
      </Box>
      <br />
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          maxWidth: "350px",
          p: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="div" variant="h4">
          Status
        </Typography>
        <Chart list={liststatus} title="Status"/>
        <br />
        <StatisticsCard list={liststatus} title="Status"/>
      </Box>
    </Box>
  )
}

export default API
