import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            {/* <div className=''> */}
            <Link to="/" className='item'>Home</Link>
            <Link to="/about" className='item'>About</Link>
            <Link to="/team" className='item'>Team</Link>
            <Link to="/contact" className='item'>FAQ</Link>
            {/* </div> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
