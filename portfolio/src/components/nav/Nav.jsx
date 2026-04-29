import React from 'react'
import './nav.css'

import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import { useState } from 'react'
function Nav() {
    const [activeNav , setActiveNav] = useState("#")
  return (
   <section className='navbar'>
    <nav >
      <ul className='nav-link'>
    <li> <a href='#home' className={activeNav == "#" ? "active" : ""} onClick={() => setActiveNav("#")}><IoHomeOutline/></a></li>
     <li> <a href='#about' className={activeNav == "#about" ? "active" : ""}  onClick={() => setActiveNav("#about")}><LuUserRound/></a></li>
      <li> <a href='#services' className={activeNav == "#services" ? "active" : ""} onClick={() => setActiveNav("#services")}><BiBook/></a></li>
      <li>  <a href='#projects' className={activeNav == "#projects" ? "active" : ""}  onClick={() => setActiveNav("#projects")}><RiServiceLine/></a></li>
        <li> <a href='#contact' className={activeNav == "#contact" ? "active" : ""}  onClick={() => setActiveNav("#contact")}><BiMessageSquareDetail/></a></li>
</ul>
</nav>
</section>
  )
}

export default Nav
