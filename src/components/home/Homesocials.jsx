import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaDribbble } from "react-icons/fa";
function Homesocials() {
  return (
    <div className='home_socials'>
        <a href="https://www.linkedin.com/in/ammar-alaa1/" target='_blank'><FaLinkedin /></a>
         <a href="https://github.com/amaralaa1" target='_blank'><FaGithub /></a>
          {/* <a href="#" target='_blank'><FaDribbble /></a> 
          <a href='https://www.instagram.com/ammar__alaa0' target='_blank'><FaInstagram/></a>  */}
      
    </div>
  )
}

export default Homesocials
