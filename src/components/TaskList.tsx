import styles from "./TaskList.module.css"

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
                <li>
                    <input type="checkbox" name="solved" id="solved" />
                </li>
            </ul>
        </div>
    )
}