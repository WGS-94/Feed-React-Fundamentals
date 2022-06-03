import React from 'react';

import igniteCapa from '../assets/ignite-capa.png'

import styles from './SideBar.module.css';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={igniteCapa} />

      <div className={styles.profile}>

        <img src="https://github.com/WGS-94.png" />

        <strong>Wilson Dos Santos</strong>
        <span>WebGIS Developer </span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
