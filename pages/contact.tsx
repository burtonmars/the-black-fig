import React from 'react'

import styles from '../styles/contact/Contact.module.css';
import Navbar from '@/components/navbar';

function Contact() {
  return (
    <div>
        <div className='home__navbar-container'>
            <Navbar />
        </div>
        <div>
            Contact
        </div>
    </div>
  )
}

export default Contact