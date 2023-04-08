import React from 'react'

import styles from '../styles/Gallery.module.scss';
import Navbar from '@/components/navbar';

function Gallery() {
  return (
    <div>
        <div className='home__navbar-container'>
            <Navbar />
        </div>
        <div>
            Gallery
        </div>
    </div>
  )
}

export default Gallery
