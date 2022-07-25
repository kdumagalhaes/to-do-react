import styles from "./Task.module.css"

//assets
import DeleteIcon from "../assets/DeleteIcon.svg"
import { useState } from "react"

interface TaskProps {
    text: string
    onDelete: (id: number) => void
    id: number
}

export function Task({text, onDelete, id}: TaskProps) {

    const [taskStatus, setTaskStatus] = useState(false)

    const handleTaskStatus = (): void => { 
        setTaskStatus(!taskStatus)
    }

    const handleDeleteTask = (): void => {
        onDelete(id)
    }

    return (
        <li className={taskStatus ? styles.taskItemDone : styles.taskItem}>
        <input 
            className={styles.checkbox} 
            type="checkbox" 
            name="solved" 
            id="solved" 
            onClick={handleTaskStatus} 
            checked={taskStatus}
            readOnly
        />
        <p className={taskStatus ? styles.taskDone : styles.taskText}>
            {text}
        </p>
        <button 
            className={styles.deleteIcon}
            onClick={handleDeleteTask}    
        >
            <img src={DeleteIcon} alt="Deletar tarefa" />
        </button>
    </li>
    )
}