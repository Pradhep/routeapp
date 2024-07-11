import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <ul className="nav-links">
    <li><Link to='/Head1' ><span>ALL</span></Link ></li>
    <li className="center"><Link to='/Head2' ><span>FULL STACK DEVELOPMENT</span></Link></li>
    <li className="upward"><Link to='/Head3' ><span>DATA SCIENCE</span></Link></li>
    <li className="forward"><Link to='/Head4' ><span>CYBER SECURITY</span></Link></li>
    <li className="forward"><Link to='/Head5' ><span>CAREER</span></Link></li>
    {/* <li className="center"><Link to='/Head1' ><span>ANIME</span></Link></li> */}
    
  </ul>
  )
}

export default Navbar