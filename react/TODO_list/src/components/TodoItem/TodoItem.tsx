import styles from './TodoItem.module.css'
import { type Todo } from '../../App'

type TodoItemProps = {
    todo: Todo
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    isSelected: boolean
    isFirst: boolean
    isLast: boolean
    onMoveUp: (id: string) => void
    onMoveDown: (id: string) => void
    onToggleSelection: (id: string) => void
}

const TodoItem = ({todo, onToggle, onDelete, isSelected, isFirst, isLast, onMoveUp, onMoveDown, onToggleSelection}: TodoItemProps) => {
    return (
        <div className={`${styles.item} ${todo.complited ? styles.completed : ''}`}>
            <input type="checkbox" className={styles.checkbox} checked={isSelected} onChange={() => onToggleSelection(todo.id)}/>
            <span className={styles.text}>{todo.text}</span>
            <div className={styles.actions}>
                <button className={todo.complited ? styles.undoBtn : styles.completeBtn} onClick={() => onToggle(todo.id)}>{todo.complited ? 'Не выполнено' : 'Выполнено'}</button>
                <button className={styles.moveBtn} onClick={() => onMoveUp(todo.id)} disabled={isFirst}>↑</button>
                <button className={styles.moveBtn} onClick={() => onMoveDown(todo.id)} disabled={isLast}>↓</button>
                <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>x</button>
            </div>
        </div>
    )
}

export default TodoItem