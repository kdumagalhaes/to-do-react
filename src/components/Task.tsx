import styles from "./Task.module.css"

//assets
import DeleteIcon from "../assets/DeleteIcon.svg"
import { useState } from "react"

export function Task() {

    const [taskStatus, setTaskStatus] = useState(false)

    const handleTaskStatus = (): void => { 
        setTaskStatus(!taskStatus)
    }

    return (
        <li className={styles.taskItem}>
        <input className={styles.checkbox} type="checkbox" name="solved" id="solved" onClick={handleTaskStatus} checked={taskStatus}/>
        <p className={taskStatus ? styles.taskDone : styles.taskText}>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
        <button className={styles.deleteIcon}>
            <img src={DeleteIcon} alt="Deletar tarefa" />
        </button>
    </li>
    )
}