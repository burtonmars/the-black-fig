import React from 'react'

import styles from '../styles/loading/Loading.module.css';

function Loading() {
  return (
    <div className={styles.loader__loading}>
      <div className={styles.loader__spinner}></div>
    </div>
  )
}

export default Loading;
