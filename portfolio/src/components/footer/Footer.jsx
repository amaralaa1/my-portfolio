import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {BsWhatsapp} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>Portfolio</a>
      <ul className='permalinks'>
         <li><a href='#home'>Home</a></li>
         <li><a href='#about'>About</a></li>
         <li><a href='#skills'>Skills</a></li>
         <li><a href='#services'>Services</a></li>
         <li><a href='#projects'>Projects</a></li>
         <li><a href='#contact'>Contact</a></li>
      </ul>
      {/* <div className="footer_socials">
        <a href='https://www.facebook.com/profile.php?id=100009190577269' target='_blank'><FaFacebookF/></a>
        <a href='https://www.instagram.com/ammar__alaa0' target='_blank'><FaInstagram/></a>
        <a href='https://api.whatsapp.com/send?phone=201154073027' target='_blank'><BsWhatsapp/></a>
      </div> */}
      <div className="footer_copyright">
        <small>&copy; <a href='#'>Portfolio</a>All rights reserved</small>
      </div>
    </footer>
    
  )
}

export default Footer
