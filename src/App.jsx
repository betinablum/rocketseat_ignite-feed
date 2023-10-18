import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/betinablum.png',
      name: 'Betina Blum',
      role: 'Web developer'
    },
    content: [
      {type: 'paragraph', content: 'Oi'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio'},
      {type: 'link', content: 'esse é um link'}      
    ], 
    publishedAt: new Date('2023-10-18 15:20:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Oi'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio'},
      {type: 'link', content: 'esse é um link'}      
    ], 
    publishedAt: new Date('2023-10-17 15:20:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </div>
    
  )

}
