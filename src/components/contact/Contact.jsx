
import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaLinkedin } from "react-icons/fa";
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';


const ContactData = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "amaralaaa209@gmail.com",
  link: "https://mail.google.com/mail/?view=cm&fs=1&to=amaralaaa209@gmail.com&su=Contact from Portfolio"
  },
  {
    id:2,
    icon: <FaLinkedin />,
    title: "LinkedIn",
    info: "Ammar ALaa",
    link: "https://www.linkedin.com/in/ammar-alaa1/",
  },
  {
    id:3,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "01154073027",
    link: "https://wa.me/201154073027",
  }
]
function Contact() {


   const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iw2a6hc', 'template_7uxh6hj', form.current, 'GGf0zpk-U8SACtta9',
      )
      e.target.reset()

      
  };

  return (
   <section className='contact'  id='contact'>
       <div className="top_section">
        {/* <h5>Getin touch</h5> */}
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
         {ContactData.map(({id, icon, title, info, link}) =>(
          <article key={id} className='contact_option' >
            {icon}
            <h4>{title}</h4>
            <h5>{info}</h5>
            <a href={link} target='_blank' rel='noreferrer'>Send Message</a>


          </article>
          
         

         ))}

        </div>


        <form ref={form} onSubmit={sendEmail}>
        <input type='text' placeholder='full Name' name='name'/>
        <input type='email' placeholder='your Email' name='email'/>
        <textarea  name = "message"  rows={8}  id='' placeholder='Enter Your Message'></textarea>
        <button type="submit" className='btn btn-primary'> Send Message</button>

        </form>
      </div>


   </section>
  )
}

export default Contact


























