import styles from "./TaskForm.module.css"

//assets
import CreateIcon from "../assets/CreateIcon.svg"

import React, { useEffect, useState } from "react"
import { Task } from "./Task"

interface Task {
    status: boolean
    text: string
    id: number
}

export function TaskForm() {

    const [taskList, setTaskList] = useState(Array<Task>)
    const [taskListWithStatus, setTaskListWithStatus] = useState(Array<Task>)
    const [taskText, setTaskText] = useState('')
    const [taskStatus, setTaskStatus] = useState(false)

    const handletaskListInvalid = (event: React.InvalidEvent<HTMLInputElement>): void => {
        event.target.setCustomValidity('Este campo não pode ser vazio!')
    }

    const handleTaskSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        let idCounter = (new Date()).getTime()

        setTaskList([...taskList, { text: taskText, status: taskStatus, id: idCounter }])
        setTaskText('')
    }
 
    const handleTaskStatus = (taskId: number): void => {
        setTaskStatus(!taskStatus)

        const taskWithStatus = taskList.map(task => {
            if (task.id === taskId) {
                task.status = !task.status
            } 
            return task
        })

        setTaskListWithStatus(taskWithStatus)
    }

    const handletaskListChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.target.setCustomValidity('')
        setTaskText(event.target.value)
    }

    const handleTaskDelete = (taskToDelete: number): void => {
        const taskListWithoutDeletedOne = taskList.filter(task => {
            return task.id !== taskToDelete
        })

        setTaskList(taskListWithoutDeletedOne)
    }

    const istaskListEmpty = taskText === "" 
    const tasksQuantity = taskList.length
    const doneTaskQuantity = taskListWithStatus.filter(task => {
         return task.status === true 
    }).length

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
                onChange={handletaskListChange}
                onInvalid={handletaskListInvalid}
                value={taskText}
                autoFocus 
                required
            />
            <button 
                type="submit"
                className={styles.button} 
                disabled={istaskListEmpty}
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
                taskList.map(task => {
                    return (
                        <Task
                        text={task.text}
                        key={task.id}
                        id={task.id}
                        onDelete={handleTaskDelete}
                        retrieveTaskId={handleTaskStatus}
                       />
                    )
                })
            }
            </ul>
        </div>
        </>
    )
}