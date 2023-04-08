import React from 'react'

import styles from '../styles/gallery/Gallery.module.css';
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
