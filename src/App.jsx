import { Header } from './components/Header'
import {Post} from './Post'

import'./styles.css'

export function App() {
  

  return (
    <div>
      <Header />
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab beatae vero iste odio sed quis aliquid labore error, libero corrupti nisi id laborum consequuntur quas inventore alias, sapiente nobis voluptatibus?" 
      />
    </div>
  )
}





