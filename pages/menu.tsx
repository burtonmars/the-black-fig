import React from 'react'

import styles from '../styles/Menu.module.scss';
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
