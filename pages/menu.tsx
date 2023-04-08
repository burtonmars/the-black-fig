import React from 'react'

import styles from '../styles/menu/Menu.module.css';
import Navbar from '@/components/navbar';

function menu() {
  return (
    <div>
        <div className='home__navbar-container'>
            <Navbar />
        </div>
        <div>
            Menu
        </div>
    </div>
  )
}

export default menu
