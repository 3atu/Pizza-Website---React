import React, {useState} from 'react'
import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    // openLinks is current state
    // setOpenLinks is the function that is used to update current state

    const toggleNavbar = () => {
      setOpenLinks(!openLinks)
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
                <ReorderRoundedIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar