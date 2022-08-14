import {FaPython} from "react-icons/fa"
import { Typography } from "@mui/material"


function Homepage_1({name}) {
    const dob = "19 March 1999"
    return (
        <Typography>
            <h1>Biodata</h1>
            <p><b>Name</b>: {name}</p>
            <p><b>Date of Birth</b>: {dob}</p>
            <p><b>Tools and Programming Languages</b>: <FaPython style={{color: "black"}}/></p>
            <p>Profile Picture</p>
            <hr />
        </Typography>
  )
}

Homepage_1.defaultProps = {
    name: "Hello World",
}

export default Homepage_1