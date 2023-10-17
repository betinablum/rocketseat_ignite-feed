import { Post } from './components/Post';
import { Header } from './components/header';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Betina" 
            content="Lorem blablabla Lorem blablabla Lorem blablabla"
          />
          <Post 
            author="Rodrigo" 
            content="Um novo post"
          />
        </main>
      </div>
    </div>
    
  )

}
