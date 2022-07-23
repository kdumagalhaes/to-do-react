import styles from "./TaskForm.module.css"

//assets
import CreateIcon from "../assets/CreateIcon.svg"

import React, { useState } from "react"
import { Task } from "./Task"

export function TaskForm() {

    const [newTask, setNewTask] = useState("")
    const [taskList, setTaskList] = useState(Array<string>)

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
    const tasksQuantity = taskList.length

    return (
        <>
        <form 
        className={styles.form}
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
        <div className={styles.wrapper}>
            <div className={styles.counter}>
                <div className={styles.createdTasks}>
                    <p>Tarefas criadas</p>
                    <span className={styles.counterNumbers}>{tasksQuantity}</span>
                </div>
                <div className={styles.solvedTasks}>
                    <p>Concluídas</p>
                    <span className={styles.counterNumbers}>2 de {tasksQuantity}</span>
                </div>
            </div>
            <ul>
               <Task />
            </ul>
        </div>
        </>
    )
}