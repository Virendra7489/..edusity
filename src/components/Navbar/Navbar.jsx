import React, { useEffect } from 'react';
import { useState} from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import { Link, ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [sticky ,setSticky] =useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[])
  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duretion={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duretion={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duretion={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duretion={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duretion={500}>Testimonials</Link></li>
        <li> <Link to='contect' smooth={true} offset={-260} duretion={500} className='btn'>Contect Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
