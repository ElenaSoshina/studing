import styles from './TodoItem.module.css'
import { type Todo } from '../../types/todo'
import Button from '../ui/Button/Button'
import Checkbox from '../ui/Checkbox/Checkbox'

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
             <Checkbox 
                checked={isSelected} 
                onChange={() => onToggleSelection(todo.id)}
            />
            <span className={styles.text}>{todo.text}</span>
            <div className={styles.actions}>
            <Button 
    variant={todo.complited ? 'danger' : 'success'}
    onClick={() => onToggle(todo.id)}
>
    {todo.complited ? 'Не выполнено' : 'Выполнено'}
</Button>

<Button 
    variant="move"
    onClick={() => onMoveUp(todo.id)} 
    disabled={isFirst}
>
    ↑
</Button>

<Button 
    variant="move"
    onClick={() => onMoveDown(todo.id)} 
    disabled={isLast}
>
    ↓
</Button>

<Button 
    variant="danger"
    size="small"
    onClick={() => onDelete(todo.id)}
>
    ✕
</Button>
            </div>
        </div>
    )
}

export default TodoItem