import NavbarLanding from '@/components/navbar-landing';
import styles from '../styles/home/Home.module.css';

export default function Home() {

  return (
    <div className={styles.home__container}>
      <main className={styles.home__main}>
        <h1 className={styles.home__title}>
        The Black Fig
        </h1>
      <div className={styles.home__navbarContainer}>
          <NavbarLanding />
      </div>
      </main>
    </div>
  )
}
