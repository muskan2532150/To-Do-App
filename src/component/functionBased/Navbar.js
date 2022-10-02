import React from 'react';
import { Link,NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/Todo' className={({isActive}) => (isActive ? 'activeLink' : '' ) }>Todo</NavLink>
      <NavLink to='/about' className={({isActive}) => (isActive ? 'activeLink' : '' ) }>About</NavLink>
      <NavLink to='/NotMatch' className={({isActive}) => (isActive ? 'activeLink' : '' ) }>Error</NavLink>
    </div>

  )
}
