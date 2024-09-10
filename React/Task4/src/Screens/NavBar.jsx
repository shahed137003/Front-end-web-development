import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';  // Import the CSS file
export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contactus" className="nav-link">Contact Us</Link>
      <Link to="/addmovie" className="nav-link">Add Movie</Link>
    </div>
    
  )
}
