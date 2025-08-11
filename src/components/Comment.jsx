import { Sidebar, ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/IghorTI.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Ighor Rodrigues</strong>
                            <time title='7 de Agosto de 2025 as 16h58' dateTime='2025-08-07 16:57:30'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
                    
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                    
                </footer>


            </div>

        </div>
    )
}