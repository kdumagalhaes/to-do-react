import styles from "./TaskForm.module.css"

//assets
import CreateIcon from "../assets/CreateIcon.svg"

import React, { useState } from "react"
import { Task } from "./Task"

interface Task {
    status: boolean
    text: string
    id: number
}

export function TaskForm() {

    const [newTask, setNewTask] = useState(Array<Task>)
    const [taskText, setTaskText] = useState('')

    const handleNewTaskInvalid = (event: React.InvalidEvent<HTMLInputElement>): void => {
        event.target.setCustomValidity('Este campo não pode ser vazio!')
    }

    const handleTaskSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        let idCounter = (new Date()).getTime()
        
        setNewTask([...newTask, {text: taskText, status: true, id: idCounter }])
        setTaskText('')
    }


    const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.target.setCustomValidity('')
        setTaskText(event.target.value)
    }

    const handleTaskDelete = (taskToDelete: number): void => {
        const taskListWithoutDeletedOne = newTask.filter(task => {
            return task.id !== taskToDelete
        })

        setNewTask(taskListWithoutDeletedOne)
    }

    const isNewTaskEmpty = taskText === "" 
    const tasksQuantity = newTask.length
    const doneTaskQuantity = 0

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
                value={taskText}
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
                    <span className={styles.counterNumbers}>{doneTaskQuantity} de {tasksQuantity}</span>
                </div>
            </div>
            <ul>
            {
                newTask.map(task => {
                    return (
                        <Task
                        text={task.text}
                        key={task.id}
                        id={task.id}
                        onDelete={handleTaskDelete}
                       />
                    )
                })
            }
            </ul>
        </div>
        </>
    )
}