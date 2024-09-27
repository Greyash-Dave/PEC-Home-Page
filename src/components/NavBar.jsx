import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) { // Change this value to adjust when the navbar changes
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuBar = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <header className={isScrolled ? 'navbar-scrolled' : 'navbar'}>
      {!isScrolled && <img src="/pec-logo.png" alt="logo" />}
      <ul className={isOpen ? 'open' : ''}>
        <li onClick={handleMenuBar}>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li onClick={handleMenuBar}>
          <NavLink >About Us</NavLink>
        </li>
        <li onClick={handleMenuBar}>
          <NavLink >Courses</NavLink>
        </li>
        <li onClick={handleMenuBar}>
          <NavLink >Academics</NavLink>
        </li>
        <li onClick={handleMenuBar}>
          <NavLink >Placements</NavLink>
        </li>
        <li onClick={handleMenuBar}>
          <NavLink >Research</NavLink>
        </li>
        <li className='login' onClick={handleMenuBar}>
          <NavLink >Login</NavLink>
        </li>
        <li className='admission' onClick={handleMenuBar}>
          <NavLink >Admission</NavLink>
        </li>
      </ul>
      <FontAwesomeIcon icon={faBars} className='menu-bar' onClick={handleMenuBar}/>
    </header>
  );
}

export default NavBar;