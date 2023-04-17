import React, { useMemo } from 'react';
import Image from 'next/image';
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';

import styles from '../styles/map-widget/Map-widget.module.css';
import mapSnip from '../assets/img/maps-snip.webp';
import locationPing from '../assets/img/location-ping.png';
import arrow from '../assets/img/up-arrow.png';
import phone from '../assets/img/phone.png';

function MapWidget() {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 49.252136, lng: -123.123434 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDtRsNA84RsJ0FduMH_-eoQLa7NU0Tre9k",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.mapwidget__container}>
      <div className={styles.mapwidget__containerMapAndAddress}>
        <div className={styles.mapwidget__map}>
          <GoogleMap
            options={mapOptions}
            zoom={13}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            onLoad={() => console.log('Map Component Loaded...')}
          />
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
      <a href='https://www.google.com/maps/@49.2589251,-123.1673799,15z' className={styles.mapwidget__containerGetDirections}>
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
