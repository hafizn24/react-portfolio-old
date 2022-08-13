import {Link, Outlet} from "react-router-dom"
import { AppBar } from "@mui/material"

function Navbar() {
  return (
    <div>
      <AppBar style={{background:"white"}}>
        <Link to={'/'} className="link">Home</Link>
        <Link to={'/rick-morty-api'} className="link">API</Link>
        <Outlet />
      </AppBar>
    </div>
  )
}

export default Navbar