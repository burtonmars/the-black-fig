import React from 'react'
import Image from 'next/image';

import styles from '../styles/gallery/Gallery.module.css';
import Navbar from '@/components/navbar';
import fishClose from '../assets/img/fish-close.webp';
import friedEgg from '../assets/img/fried-egg.webp';
import manhattens from '../assets/img/manhattens.webp';
import mojito from '../assets/img/mojito.webp';
import ramen from '../assets/img/ramen.webp';
import shaker from '../assets/img/shaker.webp';
import sqaushSoup from '../assets/img/squash-soup.webp';
import tableFood from '../assets/img/table-food.webp';
import tableWine from '../assets/img/table-wine.webp';

function Gallery() {
  return (
    <div>
        <div className='home__navbar-container'>
            <Navbar />
        </div>
        <div className={styles.gallery__container}>
          <a>
            <Image src={friedEgg} alt="fried egg"/>
          </a>
          <a>
            <Image src={manhattens} alt="manhattens"/>
          </a>
          <a>
            <Image src={ramen} alt="ramen"/>
          </a>
          <a>
            <Image src={shaker} alt="martini shaker"/>
          </a>
          <a>
            <Image src={sqaushSoup} alt="butternut sqaush soup"/>
          </a>
          <a>
            <Image src={tableFood} alt="table with various food dishes"/>
          </a>
          <a>
            <Image src={tableWine} alt="table with wine"/>
          </a>
           <a>
            <Image src={fishClose} alt="fish dish"/>
          </a>
          <a>
            <Image src={mojito} alt="mojito"/>
          </a>
      </div>
    </div>
  )
}

export default Gallery
