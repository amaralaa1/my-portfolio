import React from 'react'
import './home.css'
import Me from '../../assets/me.png'
import CV from '../../assets/Ammar_Alaa_Frontend_Developer_CV.pdf'
import Homesocials from './Homesocials'


function Home() {


  return (
    <div className='Home' >
    <div className="container home_container" id='home'>
        <h4>Hello I'm</h4>
        <h1>Ammar Alaa</h1>
        <h4 className='text-light'>Frontend Developer</h4>


      <div className="btns">
        {/* <a href="PUT_YOUR_NEW_LINK_HERE" className='btn' target="_blank">Download CV</a> */}
        <a href={CV} className='btn' download>Download CV</a>
      </div>
<div className="me">
  <img src={Me} alt=''/>
</div>
<Homesocials />

    </div>


   </div>
  )
}

export default Home
