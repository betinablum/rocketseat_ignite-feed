import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/betinablum.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Betina Blum</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="17 de outubro de 2023 às 14:38" dateTime="2023-10-17 14:38:54">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Oi</p>
                <p>esse é um novo post</p>
                <p>com <a href="">link</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>    
                    <button type="submit">Publicar</button>
                </footer>    
            </form>
        </article>
    )
}