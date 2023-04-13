import styles from './Header.module.css'
import logo from '../assets/Logo-Todo.svg'


export function Header(){
    return(
    <header className={styles.header}>
    <img
    src={ logo } 
    alt="The best developer of world!"
    />
    </header>
   
    
    )
}