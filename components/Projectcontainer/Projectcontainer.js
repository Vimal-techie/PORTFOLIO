import React from 'react'
import { Element } from "react-scroll";
import Project from '../Project/Project';
import "./Projectcontainer.css"

const Projectcontainer = () => {
    const Projects=[
        {
            img : "https://www.tutorjoes.in/js_program/output/17_inc_exp_tracker.jpg",
            title: "Income-Expense-Tracker",
            desc: 'The application is used to store our daily income and expense',
            link:"www.google.com",
        },
         {
            img : "https://media.licdn.com/dms/image/v2/D5622AQHVDe5sj5X90Q/feedshare-shrink_800/feedshare-shrink_800/0/1716942001301?e=2147483647&v=beta&t=_uZQi2yqwmQJBvYsF2gsakgrIBEPNqAAF-zLbgyePdw",
            title: "ROCK-PAPER-SCISSORS",
            desc: 'An application created for entertainment purposes is designed to provide amusement,enjoyment to its user',
            link:"www.google.com",
        }
    ]
  return (
    <Element className="projectcontainer" id="projects">
        <h1>Projects</h1>
        <p>
            Here are some projects which I done for my study purpose and job purpose
        </p>
        <div className='projectcontainer__projects'>
{
   Projects.map((project,index)=>{
    return(
        <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
    )
   })
}   
        </div>
    </Element>
  )
}

export default Projectcontainer