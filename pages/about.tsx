import React from 'react'

import styles from '../styles/About.module.scss';
import Navbar from '@/components/navbar';

function About() {
  return (
    <div>
        <div className='home__navbar-container'>
            <Navbar />
        </div>
        <div>
            About
        </div>
    </div>
    
  )
}

export default About
