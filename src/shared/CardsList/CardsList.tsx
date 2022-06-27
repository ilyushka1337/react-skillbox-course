import React from 'react'
import Card from './Card/Card'
import styles from './cards-list.scss'

export default function CardsList() {
  return (
    <ul className={styles.cardsList}>
        <Card/>
    </ul>
  )
}
