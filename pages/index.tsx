import styles from '../styles/Home.module.css'
import Navbar from "@/components/navbar";

export default function Home() {
  return (
   <div>
      <main>
        <div className='home__navbar-container'>
          <Navbar />
        </div>
        <h1>
          The Black Fig
        </h1>
      </main>
    </div>
  )
}
