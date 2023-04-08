import Link from 'next/link'
import React from 'react'

import styles from '../styles/Navbar.module.scss';

function Navbar() {
  return (
    <nav>
        <div className='navbar__logo'>
            <Link href="/" >
                <h2>TBF</h2>
            </Link>
        </div>
        <div className='navbar__navbar'>
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
}

export default Navbar
