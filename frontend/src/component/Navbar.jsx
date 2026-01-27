import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar

//     Html
//head      body
//title   h1    div
//               p

//virtual dom
//     Html
//head      body
//title   h1    div
//               p//new

//Actual dom
//     Html
//head      body
//title   h1    div
//               p//updated