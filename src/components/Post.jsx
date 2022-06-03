import React from 'react';

import { Comment } from '../components/Comment';

import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/WGS-94.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Wilso Dos Santos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13' dateTime='2022-05-11 08:13:38'>
          publicado há 1h
        </time>

      </header>

      <div className={styles.contentPost}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">wilson.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
          <a href="#">#nafau</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
       <Comment />
       <Comment />
      </div>
     
    </article>
  )
}
