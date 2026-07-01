import React from 'react'
import './projects.css'
import IMG1 from '../../assets/mealify.png'
import IMG2 from '../../assets/GYM.png'
import IMG3 from '../../assets/bezel.png'
import IMG4 from '../../assets/weather.png'
import IMG5 from '../../assets/bookmarker.png'
import IMG6 from '../../assets/dinner.png'
import IMG7 from '../../assets/contact_hub.png'
import IMG8 from '../../assets/COSMOS - Space Dashboard.png'
import IMG9 from '../../assets/note app.png'
import { FaGithub } from 'react-icons/fa'

const PortfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'Mealify Restaurant',
    github: 'https://github.com/amaralaa1/Mealify',
    demo: 'https://mealify-wine-phi.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Modern Gym Website',
    github: 'https://github.com/amaralaa1/GYM',
    demo: 'https://gym-lilac-ten.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Bezel Landing Page',
    github: 'https://github.com/amaralaa1/BEZEL',
    demo: 'https://bezel-two.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Weather App',
    github: 'https://github.com/amaralaa1/weather',
    demo: 'https://weather-jet-mu.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Bookmark Manager',
    github: 'https://github.com/amaralaa1/boomarker',
    demo: 'https://boomarker.vercel.app/'
  },

  {
    id: 6,
    image: IMG6,
    title: 'What Is For Dinner',
    github: 'https://github.com/amaralaa1/What-s-for-Dinner',
    demo: 'https://what-s-for-dinner-beta.vercel.app/'
  },
   {
    id: 7,
    image: IMG7,
    title: 'Contact Hub',
    github: 'https://github.com/amaralaa1/ContactHub',
    demo: 'https://contact-hub-eta.vercel.app/'
  },

   {
    id: 8,
    image: IMG8,
    title: 'Space Explorer Dashboard',
    github: 'https://amaralaa1.github.io/COSMOS---Space-Dashboard-/',
    demo: 'https://cosmos-space-dashboard-eta.vercel.app/'
  },

  {
    id: 9,
    image: IMG9,
    title: 'NoteAPP',
    github: 'https://github.com/amaralaa1/notapp',
    demo: 'https://notapp-ten.vercel.app/login'
  }
];
















function Projects() {
  return (
   <section className='projects' id='projects'>
    <div className="top_section">
        <h2>Projects</h2>
      </div>

      <div className="container projects_container">


        {PortfolioData.map(({id, image,  title, github, demo}) => (
  <article key={id} className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={image} alt=''/>
          </div>
          <h3>{title}</h3>

          <div className="portfolio_item_btns">
            <a href= {github} target='_blank' className='btn'>Github</a>
              <a href= {demo}  target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        ))}







      
      </div>

   </section>
  )
}

export default Projects
