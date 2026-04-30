import React from 'react'
import './services.css'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <section id='services'>
      <div className="top_section">
        <h2>Services</h2>
      </div>
 <div className="container container_services">
  <article className='card'>
  <MdDesignServices className='icon'/>
  <h3>Web Design</h3>
  <p className='text-light'>
    I create clean and modern UI designs that focus on usability, structure, and a good user experience across all devices.
  </p>
</article>

<article className='card'>
  <IoIosRocket className='icon'/>
  <h3>Fast Performance</h3>
  <p className='text-light'>
    I build optimized and responsive web applications that load quickly and run smoothly on all devices and browsers.
  </p>
</article>

<article className='card'>
  <FaCode className='icon'/>
  <h3>Clean Code</h3>
  <p className='text-light'>
    I write clean, reusable, and maintainable code following best practices to make projects scalable and easy to improve.
  </p>
</article>









  {/* <article className='card'>
    < MdDesignServices  className='icon'/>
    <h3>Web Design</h3>
    <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed facilis nam architecto.</p>
  </article>

  <article className='card'>
    < IoIosRocket  className='icon'/>
    <h3>Fast Performance</h3>
        <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed facilis nam architecto.</p>
  </article>

  <article className='card'>
    < FaCode  className='icon'/>
    <h3>Clean code</h3>
        <p className='text-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed facilis nam architecto.</p>
  </article> */}


 </div>

    </section>
  );
 }




export default Services
