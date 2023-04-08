import React from 'react';
import Link from 'next/link';

import styles from '../styles/navbar-landing/Navbar-Landing.module.css';


function NavbarLanding() {
  return (
    <nav className={styles.navbar__container}>
        <div className={styles.navbar__navbar}>
            <Link href="/about" >
                <h2>About</h2>
            </Link>
            <Link href="/menu">
                <h2>Menu</h2>
            </Link>
            <Link href="/contact">
                <h2>Reservations</h2>
            </Link>
            <Link href="/gallery">
                <h2>Gallery</h2>
            </Link>
            <Link href="/contact">
                <h2>Contact</h2>
            </Link>
        </div>
    </nav>
  )
};

export default NavbarLanding;
