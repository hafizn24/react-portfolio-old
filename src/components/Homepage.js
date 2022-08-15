import Biodata from "./Biodata"
import { Box, Divider } from "@mui/material"
import Cert from "./Cert"
import Typography from '@mui/material/Typography';



function Homepage() {
  return (
    <Box>
      <Biodata/>
      <Divider variant='middle'/>
      <Typography component="div" variant="h3">
        <center>CERTIFICATES</center>
      </Typography>
      <Cert />
    </Box>
  )
}

export default Homepage