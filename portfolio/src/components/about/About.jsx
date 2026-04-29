import React from 'react'
import './about.css'
import IMageME from '../../assets/me-about.jpg'
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
  return (
    <section className='about' id='about'>
      <div className="top_section">
        <h2>About Me</h2>
      </div>

      <div className="container about_container">

        {/* Image */}
        <div className="about_me">
          <div className="about_me_image">
            <img src={IMageME} alt='About me' />
          </div>
        </div>

        {/* Content */}
        <div className="about_content">

          {/* Cards */}
          {/* <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Front-End Development</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>Projects & Practice</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>Multiple Completed</small>
            </article>
          </div> */}

          {/* Text */}
          <p>
            I'm a Front-End Developer focused on building responsive, user-friendly web applications using HTML, CSS, JavaScript, React, Next.js, and Bootstrap.
          </p>

          <p>
            I enjoy turning ideas into interactive experiences and care about the details—performance, accessibility, and clean design.
          </p>

          <p>
            I'm always learning and improving my skills, and I'm currently looking for an opportunity where I can grow and work on real projects.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About


 
      

     
      






