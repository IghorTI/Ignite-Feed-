import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
  
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab beatae vero iste odio sed quis aliquid labore error, libero corrupti nisi id laborum consequuntur quas inventore alias, sapiente nobis voluptatibus?"
          />

          <Post
            author="Ighor Rodrigues"
            content="Aprendendo ReactJS from scratch"
          />
        </main>
      </div>


    </div>
  )
}





