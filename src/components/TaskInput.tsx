import styles from "./TaskInput.module.css"

//assets
import CreateIcon from "../assets/CreateIcon.svg"
import React, { useState } from "react"

export function TaskInput() {

    const [newTask, setNewTask] = useState("")
    const [taskList, setTaskList] = useState([""])


    const handleNewTaskInvalid = (event: React.InvalidEvent<HTMLInputElement>): void => {
        event.target.setCustomValidity('Este campo não pode ser vazio!')
    }

    const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.target.setCustomValidity('')
        setNewTask(event?.target.value)
    }

    const handleTaskSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        setTaskList([...taskList, newTask])
    }

    const isNewTaskEmpty = newTask === "" 

    return (
        <form 
        className={styles.wrapper}
        onSubmit={handleTaskSubmit}
        >
            {/* inserir borda 1px gray-700 */}
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                autoFocus 
                required
            />
            <button 
                type="submit"
                className={styles.button} 
                disabled={isNewTaskEmpty}
            >
                Criar
                <img src={CreateIcon} alt="Criar" />
            </button>
        </form>
    )
}