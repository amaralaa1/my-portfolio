import React from 'react'
import './projects.css'
import IMG1 from '../../assets/mealify.png'
import IMG2 from '../../assets/GYM.png'
import IMG3 from '../../assets/bezel.png'
import IMG4 from '../../assets/weather.png'
import IMG5 from '../../assets/bookmarker.png'
import IMG6 from '../../assets/note app.png'
import { FaGithub } from 'react-icons/fa'

const PortfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'HTML.CSS 1',
    github: 'https://github.com/amaralaa1/Mealify',
    demo: 'https://mealify-wine-phi.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'HTML.CSS 2',
    github: 'https://github.com/amaralaa1/GYM',
    demo: 'https://gym-lilac-ten.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'BootStrap',
    github: 'https://github.com/amaralaa1/BEZEL',
    demo: 'https://bezel-two.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Java Script 1',
    github: 'https://github.com/amaralaa1/weather',
    demo: 'https://weather-jet-mu.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Java Script 2',
    github: 'https://github.com/amaralaa1/boomarker',
    demo: 'https://boomarker.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'React JS',
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
