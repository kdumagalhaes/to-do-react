import styles from "./Header.module.css"

//assets
import Logo from "../assets/Logo.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="To-do Logo" />
        </header>
    )
}