import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <h3>Navbar</h3>
     <Link to="/home"> <h3>Home</h3>  </Link> 
      
     <Link to="/login"> <h3>Login</h3>  </Link> 
     </div>)
}
