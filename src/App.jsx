import { Post } from './components/Post';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';

import styles from './App.module.css'

import './globalStyle.css';


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post 
            author="wilson santos"
            content="Desenvolvedor web carneiroooo, tem que bucar mais kkkk"
          />
          <Post />
        </main>
      </div>
    </div>
  )
}
