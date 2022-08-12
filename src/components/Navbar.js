import {Link, Outlet} from "react-router-dom"

function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/api'}>API</Link></li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Navbar