import styles from "./TaskInput.module.css"

//assets
import CreateIcon from "../assets/CreateIcon.svg"

export function TaskInput() {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" autoFocus />
            <button className={styles.button}>
                Criar
                <img src={CreateIcon} alt="Criar" />
            </button>
        </div>
    )
}