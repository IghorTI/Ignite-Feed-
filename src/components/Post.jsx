import styles from './Post.module.css'
import { Comment } from './Comment'


export function Post(){

    return(
       <article className={styles.post}>

        <header>
            <div className={styles.author}>

                <img
                    className={styles.avatar} 
                    src="https://github.com/IghorTI.png" 
                />

                <div className={styles.authorInfo}>
                    <strong>Ighor Rodrigues</strong>
                    <span>FullStack Developer</span>
                </div>
            </div>

            <time title='7 de Agosto de 2025 as 16h58' dateTime='2025-08-07 16:57:30'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraaa</p>
            <p>Acabei de subir mais um projeto parao GitHub. É um projeto do Ignite da Rocketseate</p>
            <p><a href=''> IghorTI</a></p>
            <p>
                <a href=''>#novoprojeto</a> {' '}
                <a href=''>#ignite</a> {' '}
                <a href=''>#rocketseat</a>
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
                placeholder='Deixe um comentário'
            />

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