import React from 'react'
import { Element } from 'react-scroll';
import "./Experiencecontainer.css"
import Experience from '../ExperienceBox/Experience';

const Experiencecontainer = () => {
  return (
    <Element className='experiencecontainer' id='exp'>
        <h1>Experience</h1>
        <div className='experiencecontainer__info'>
            <Experience number='+5' title="JS Projects"/>
            <Experience number='+3' title="REACT Projects" style={{backgroundColor:"orange"}}/>
            <Experience number='+10' title="HTML Projects"/>
            <Experience number='+5' title="CSS Projects"/>
        </div>
    </Element>
  )
}

export default Experiencecontainer