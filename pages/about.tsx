import React from 'react'
import Image from 'next/image';

import styles from '../styles/about/About.module.css';
import Navbar from '@/components/navbar';
import crewPhoto from '../assets/img/crew.webp';
import chefPhoto from '../assets/img/chef.webp';
import signature from '../assets/img/signature.webp';

function About() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className={styles.about__container}>
          <div className={styles.about__aboutUsContainer}>
            <div className={styles.about__aboutUsLeft}>
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, 
                dolores alias. Explicabo laudantium beatae incidunt non, accusamus 
                vero impedit rerum voluptates veniam dolor quibusdam aliquid exercitationem 
                eum nobis soluta adipisci. Explicabo laudantium beatae incidunt non, accusamus 
                vero impedit rerum voluptates veniam dolor quibusdam aliquid exercitationem 
                eum nobis soluta adipisci!</p>
            </div>
            <div className={styles.about__aboutUsRight}>
                <Image 
                  src={crewPhoto} 
                  alt='the crew'
                  width={650}
                  height={650}>
                </Image>
            </div>
          </div>
          <div className={styles.about__fromChefContainer}>
            <div className={styles.about__fromChefLeft}>
                <Image 
                  src={chefPhoto} 
                  alt='chef'
                  width={500}
                  height={950}>
                </Image>
            </div>
            <div className={styles.about__fromChefRight}>
                <h1>From the Chef</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum odit, quis 
                quae neque possimus suscipit, velit quasi dignissimos architecto soluta iure 
                consectetur cumque pariatur minus, ducimus doloribus earum quam. Velit quasi dignissimos architecto soluta iure 
                consectetur cumque pariatur minus, ducimus doloribus earum quam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa 
                  nostrum aperiam sint facere consequuntur! Eligendi, harum molestias, ad mollitia 
                  voluptates eius saepe, modi veniam assumenda explicabo optio eum nisi?</p>
                <div className={styles.about__chefSignature}>
                    <Image 
                      src={signature} 
                      alt='chef signature'
                      width={150}
                      height={100}>
                    </Image>
                </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default About
