import styles from "./NoTaskMessage.module.css"

//assets
import ClipboardIcon from "../assets/Clipboard.svg"

export function NoTaskMessage() {
    return (
        <div className={styles.wrapper}>
            <img src={ClipboardIcon} alt="ícone clipboard" />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}