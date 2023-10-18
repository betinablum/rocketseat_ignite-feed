import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
        locale:ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
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

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />

            </div>
        </article>
    )
}