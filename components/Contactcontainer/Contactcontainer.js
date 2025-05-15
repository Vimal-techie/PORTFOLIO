import React from 'react'
import {Element} from "react-scroll";
import { IconButton } from "@mui/material";
import { Facebook,Instagram,LinkedIn } from '@mui/icons-material';
import './Contactcontainer.css'


const Contactcontainer = () => {
  return (
    <Element className='contactcontainer'id='contact'>
         <h1>Contact</h1>
         <div className='contact__container'>
            <p>
                Email : <span>vimalautomobile16@gmail.com</span>
            </p>
             <p>
                Github Username : <span>Vimal-techie</span>
            </p>
            <div className='contact__icon'>
                <a href='google.com'>
                  <IconButton>
                    <LinkedIn/>
                  </IconButton>
                  <IconButton>
                    <Facebook/>
                  </IconButton>
                  <IconButton>
                    <Instagram/>
                  </IconButton>
                </a>
            </div>
         </div>
    </Element>

  )
}

export default Contactcontainer