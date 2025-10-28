import React, { useEffect } from 'react';
import { useState} from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link, ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [sticky ,setSticky] =useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[])
  ;
  const [mobileMenu , setMobileMenu] = useState(false);
  const ToggleMenu = ()=>{
mobileMenu ? setMobileMenu(false) :setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-moblie-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duretion={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duretion={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duretion={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duretion={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duretion={500}>Testimonials</Link></li>
        <li> <Link to='contect' smooth={true} offset={-260} duretion={500} className='btn'>Contect Us</Link></li>
      </ul>
       <img src={menu_icon} className='menu-icon'  onClick={ToggleMenu}/>
    </nav>
   
  )
}

export default Navbar
