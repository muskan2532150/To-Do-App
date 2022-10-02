import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false);

  const handleToggle = () => {
    setnavOpen(!navOpen);
  }

  const closeMenu = () => {
    setnavOpen(false)
  }

  return (
    <nav>
      <button onClick={handleToggle} type='button'>{navOpen ?
        <MdClose style={{ color: "rgb(34 31 31 / 36%)", width: "40px", height: "40px" }} />
        : <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
      }
      </button>
      <div className={`navbar ${navOpen ? " showMenu" : ""}`}>
        <NavLink to='/Todo' className={({ isActive }) => (isActive ? 'activeLink' : '')} onClick={() => closeMenu()}>Todo</NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'activeLink' : '')} onClick={() => closeMenu()}>About</NavLink>
      </div>

    </nav>

  )
}
