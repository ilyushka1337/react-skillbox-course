import React from 'react'
import styles from './card.scss'
import { KarmaCounter } from './KarmaCounter'
import { CommentsButton } from './CommentsButton'
import { ShareButton } from './ShareButton'
import { SaveButton } from './SaveButton'
import { Menu } from './Menu'

import postImg from 'Assets/post-preview-1.jpg'
import user from 'Assets/user.jpg'

export default function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img alt="" className={styles.avatar} src={user} />
            <a href="" className={styles.userName}>Дмитрий Гришин</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
          </span>
        </div>
        <h2 className={styles.title}>
          <a href="#link" className={styles.postLink}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, assumenda.</a>
        </h2>
      </div>

      <div className={styles.preview}>
        <img src={postImg} alt="" className={styles.previewImg} />
      </div>

      <div className={styles.menu}>
        <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
        </button>
      </div>

      <div className={styles.controls}>
        <KarmaCounter/>
        <CommentsButton/>
        <div className={styles.actions}>
          <ShareButton/>
          <SaveButton/>
        </div>
      </div>
    </li>
  )
}