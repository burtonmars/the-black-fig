import React from 'react';
import Image from 'next/image';
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';

import styles from '../styles/map-widget/Map-widget.module.css';
import locationPing from '../assets/img/location-ping.png';
import arrow from '../assets/img/up-arrow.png';
import phone from '../assets/img/phone.png';

function MapWidget() {

  return (
    <div className={styles.mapwidget__container}>
      <div className={styles.mapwidget__containerMapAndAddress}>
        <div className={styles.mapwidget__map}>
        </div>
        <div className={styles.mapwidget__addressContainer}>
          <div className={styles.mapwidget__addressIcon}>
            <Image
              src={locationPing}
              alt='location ping'
              width={50}
              height={50}
            />
          </div>
          <div className={styles.mapwidget__addressText}>
            <h1>The Black Fig</h1>
            <section>123 Main Street</section>
            <section>Vancouver, BC V5V 1F3</section>
          </div>
        </div>
      </div>
      <a href='' className={styles.mapwidget__containerGetDirections}>
        <div className={styles.mapwidget__directionsArrow}>
          <Image 
            src={arrow}
            alt='arrow'
            width={30}
            height={30}
          />
        </div>
        <div className={styles.mapwidget__getDirectionsText}>
          <section>Get Directions</section>
        </div>
      </a>
      <div className={styles.mapwidget__containerPhoneNumber}>
        <div className={styles.mapwidget__phoneIcon}>
          <Image 
            src={phone}
            alt='phone'
            width={30}
            height={30}
          />
        </div>
        <div className={styles.mapwidget__phoneNumberText}>
          (+1) 123 321 1234
        </div>
      </div>
    </div>
  )
};

export default MapWidget;
