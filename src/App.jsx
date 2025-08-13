import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/IghorTI.png',
      name: "Ighor Rodrigues",
      role: "Software Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto parao GitHub. É um projeto do Ignite da Rocketseate' },
      { type: 'link', content: 'https://github.com/IghorTI' }
    ],
    publishedAt: new Date('2025-08-10 17:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/kellylidiane.png',
      name: "Kelly Lidiane",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa' },
      { type: 'paragraph', content: "My name is Kelly Lidiane, I've been a web developer since 2017. I've worked on the backend with C# and Python, but currently, my focus is on frontend development with React, mainly. I'm also an enthusiast about web accessibility" },
      { type: 'link', content: 'https://github.com/kellylidiane' }
    ],
    publishedAt: new Date('2025-08-09 17:00:00')
  }
]




export function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}               
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>


    </div>
  )
}





