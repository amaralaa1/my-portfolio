import React from "react";
import "./skills.css";
import HTML from "../../assets/Html.png";
import CSS from "../../assets/css3.svg";
import Bootstrap from "../../assets/bootsrap.jpg";
import Javascript from "../../assets/javascript.svg";
import Reactjs from "../../assets/react.svg";
 import Nextjs from "../../assets/next.jpg";
 import Figma from "../../assets/figma.svg";
 import Claude from '../../assets/claude_logo.jpg'
// import VisualStudio from "../../assets/visualstudio.jpg";
const SkillsData = [
  {
    id: 1,
    image: HTML,
    title: "HTML",
    disc: "Markup & structure",
  },
  {
    id: 2,
    image: CSS,
    title: "CSS",
    disc: "Responsive design",
  },
  {
    id: 3,
    image: Bootstrap,
    title: "Bootstrap",
    disc: "UI framework",
  },
  {
    id: 4,
    image: Javascript,
    title: "JavaScript",
    disc: "Logic & interactivity",
  },
  {
    id: 5,
    image: Reactjs,
    title: "React",
    disc: "Frontend library",
  },
  {
    id: 6,
    image: Nextjs,
    title: "Next.js",
    disc: "Full-stack framework",
  },
  // {
  //   id: 7,
  //   image: VisualStudio,
  //   title: "VS Code",
  //   disc: "Code editor",
  // },
  {
    id: 8,
    image: Figma,
    title: "Figma",
    disc: "UI/UX design",
  },
  {
    id: 9,
    image: Claude,
    title: "Claude AI",
    disc: "AI-assisted development",
  },
];



function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        {/* <h5>What Skills I Have</h5> */}
        <h2>My Expreience</h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({id,  image, title, disc }) => (
          <article key={id} className="card_skill">
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text_light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
