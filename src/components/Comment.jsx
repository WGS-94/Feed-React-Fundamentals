import React from 'react';
import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment({content, onDeleteComment }) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/WGS-94.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wilson Dos Santos</strong>
              <time title='12 de Maio às 10:13' dateTime='2022-05-12 10:13:38'>
                cerca de 1h atrás
              </time>
            </div>
            <button 
              onClick={handleDeleteComment}
              title='Deletar comentário'>
              <Trash size={24} 
            />
            </button>
          </header>

          <p>{content}</p>

        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
