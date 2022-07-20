import styles from "./TaskList.module.css"

//assets
import DeleteIcon from "../assets/DeleteIcon.svg"

export function TaskList() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.counter}>
                <div className={styles.createdTasks}>
                    <p>Tarefas criadas</p>
                    <span className={styles.counterNumbers}>5</span>
                </div>
                <div className={styles.solvedTasks}>
                    <p>Concluídas</p>
                    <span className={styles.counterNumbers}>2 de 5</span>
                </div>
            </div>
            <ul>
                <li className={styles.taskItem}>
                    <input className={styles.checkbox} type="checkbox" name="solved" id="solved" />
                    <p className={styles.taskText}>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    </p>
                    <button className={styles.deleteIcon}>
                        <img src={DeleteIcon} alt="Deletar tarefa" />
                    </button>
                </li>
            </ul>
        </div>
    )
}