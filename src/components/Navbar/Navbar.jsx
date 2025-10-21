import React, { useEffect } from 'react';
import { useState} from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'

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
        <li>Home</li>
        <li>Programe</li>
        <li>Aboute Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li> <button className='btn'>Contect Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
