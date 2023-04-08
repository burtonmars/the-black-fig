import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'

import styles from '../styles/navbar/Navbar.module.css';
import hamburgerMenu from '../assets/img/hamburger-menu.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
            <Link href="/" >
                <h2>TBF</h2>
            </Link>
        </div>
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
        <div className={styles.navbar__hamburgerContainer}>
            <div  className={`${
                !isMenuOpen ? 'flex justify-evenly' : 'hidden' }  ${styles.navbar__hamburgerIcon}`}>
                <button onClick={toggleMenu}>
                    <Image src={hamburgerMenu} alt="navigation">
                    </Image>
                </button>
            </div>
            <div
                className={`${
                isMenuOpen ? 'block' : 'hidden' }  ${styles.navbar__hamburgerMenu}`}>
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
        </div>
    </nav>
  )
}

export default Navbar
