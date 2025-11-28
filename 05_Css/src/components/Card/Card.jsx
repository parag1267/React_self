import React from 'react'
import styles from './Card.module.css'
const Card = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.text}>P.C.HAdiya</h1>
      <button className={styles.btn}>Click Me</button>
    </div>
  )
}

export default Card
