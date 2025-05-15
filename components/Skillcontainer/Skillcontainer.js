import React from 'react'
import { Element } from 'react-scroll';
import skilling from '../../Assets/skill.jpg'
import { LinearProgress } from '@mui/material';
import "./Skillcontainer.css"

const Skillcontainer = () => {
  return (
    <Element className='skillcontainer' id="skills">
        <div className='skillcontainer__image'>
            <img src={skilling} alt=''/>
        </div>
        <div className='skillcontainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillcontainer__skillset'>
                <h5>React</h5>
                <div className='skillcontainer__slider skillcontainer__slider1'>
                <LinearProgress variant='determinate' value={70}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>Nodejs</h5>
                <div className='skillcontainer__slider skillcontainer__slider2'>
                <LinearProgress variant='determinate' value={50}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>JavaSript</h5>
                <div className='skillcontainer__slider skillcontainer__slider3'>
                <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>CSS</h5>
                <div className='skillcontainer__slider skillcontainer__slider4'>
                <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>Html</h5>
                <div className='skillcontainer__slider skillcontainer__slider5'>
                <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
        </div>
    </Element>
  )
}
export default Skillcontainer