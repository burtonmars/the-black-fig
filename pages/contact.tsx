import React from 'react';
import Image from 'next/image';

import styles from '../styles/contact/Contact.module.css';
import Navbar from '@/components/navbar';
import MapWidget from '@/components/map-widget';
import Reservation from '@/components/reservation';
import EmailUs from '@/components/email-us';

import facebookIcon from '../assets/img/icons8-facebook.png';
import instagramIcon from '../assets/img/icons8-instagram.png';

function Contact() {
  return (
    <>
      <div className={styles.contact__navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.contact__container}>
        <div className={styles.contact__backgroundImg}>
            <div className={styles.contact__backgroundTint}></div>
        </div>
        <div className={styles.contact__formContainer}>
          <Reservation />
          <EmailUs />
        </div>
        <div className={styles.contact__mapWidgetContainer_outer}>
          <div className={styles.contact__mapWidgetContainer_inner}>
            <MapWidget />
          </div>
          <div className={styles.contact__social}>
            <a href='https://www.facebook.com/' target='_blank'>
              <Image src={facebookIcon} alt='facebook' width={50} height={50}/>
            </a>
            <a href='https://www.instagram.com/' target='_blank'>
              <Image src={instagramIcon} alt='instagram' width={50} height={50}/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact