import React from 'react'

import styles from '../styles/contact/Contact.module.css';
import Navbar from '@/components/navbar';
import MapWidget from '@/components/map-widget';
import Reservation from '@/components/reservation';
import EmailUs from '@/components/email-us';

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
        </div>
      </div>
    </>
  )
}

export default Contact