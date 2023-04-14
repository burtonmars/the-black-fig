import React from 'react'

import styles from '../styles/menu/Menu.module.css';
import Navbar from '@/components/navbar';

function menu() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className={styles.menu__main}>
          <h1>The Black Fig</h1>
          <h3>est. 2023</h3>
          <div className={styles.menu__container}>
            <div className={styles.menu__leftContainer}>
                <div className={`${styles.menu__starters} ${styles.menu__section}`}>
                  <h2>Starters</h2>
                  <ul>
                    <li>Arugula, beets, carrots and radish with a ginger vinaigrette</li>
                    <li>Dhal with a spiced ghee topping</li>
                    <li>Lemongrass chicken filled dumplings</li>
                    <li>Chipotle pulled pork, cotija cheese, pickled red onion and cilantro on masa cakes</li>
                    <li>Arugula, beets, carrots and radish with a ginger vinaigrette</li>
                  </ul>
                </div>
                <div className={`${styles.menu__mains} ${styles.menu__section}`}>
                  <h2>Mains</h2>
                  <ul>
                      <li>Pan roasted wild salmon, fennel tagliatelle, gem lettuce, velute fnes herbs</li>
                      <li>Goat or lamb braised in gravy flavored with aromatic spices like fennel, cloves, cardamom, cinnamon & ginger</li>
                      <li>Grilled chicken breasts, topped with a delicious ruby-red cherry salsa, made from the season’s best local cherries</li>
                      <li>Chicken kebabs marinated with aromatic saffron and tangy lemon with blistered local cherry tomatoes</li>
                      <li>Grilled trout fillet with a sweet pineapple sauce and bright, roasted peppers</li>
                      <li>Greek-style lamb meatballs on a bed of garlicky yogurt and topped with some refreshing mint chimichurri sauce</li>
                  </ul>
                </div>
                <div className={`${styles.menu__sides} ${styles.menu__section}`}>
                  <h2>Sides</h2>
                  <ul>
                    <li>Roasted brussels sprouts, toasted hazel nuts</li>
                    <li>New potatoes in garlic butter</li>
                    <li>Sautéed mushrooms, shallots, white wine, parsley</li>
                    <li>new potatoes in garlic butter</li>
                  </ul>
                </div>
            </div>
            <div className={styles.menu__rightContainer}>
                <div className={`${styles.menu__desert} ${styles.menu__section}`}>
                  <div className={styles.menu__sectionTitle}>
                    <h2>Deserts</h2>
                  </div>
                  <ul>
                    <li>Saffron ice-cream topped with our pistachio and cardamom cookie</li>
                    <li>Crispy baklava pieces, filled with walnuts and dates and drenched in a cardamom and honey syrup</li>
                    <li>Turmeric and Orange Cake topped with orange blossom buttercream, almonds, pistachios, rose and candied orange</li>
                  </ul>
                </div>   
                <div className={`${styles.menu__cocktails} ${styles.menu__section}`}>
                  <h2>Cocktails</h2>
                  <ul>
                    <li>De Luze Cognac, Amaretto, lemon juice, ginger syrup, red wine float</li>
                    <li>Bulleit Bourbon applewood smoked Manhatten</li>
                    <li>Tanqueray, Luxardo, fresh squeezed lemon and beet juice, orange and tarragon syrup, herbes de Provence dust</li>
                    <li>Aperol, splash of Lillet, soda, sparkling wine</li>
                    <li>Rosé wine L’Orangeraie, fresh squeezed grapefruit juice, splash of simple syrup</li>
                  </ul>
                </div>
                <div className={`${styles.menu__wine} ${styles.menu__section}`}>
                  <h2>Wine</h2>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default menu
