import styles from './TodoList.module.css'
import { type Todo } from '../../App'
import TodoItem from '../TodoItem/TodoItem'
type TodoListProps = {
    todos: Todo[]
    selectedIds: string[]
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    onMoveUp: (id: string) => void
    onMoveDown: (id: string) => void
    onToggleSelection: (id: string) => void
    onSelectAll: () => void
    onClearSelection: () => void
    onBulkToggle: () => void
    onBulkDelete: () => void
    allSelectedCompleted: boolean
}

const TodoList = ({todos, selectedIds, onToggle, onDelete, onMoveUp, onMoveDown, onToggleSelection, onSelectAll, onClearSelection, onBulkToggle, onBulkDelete, allSelectedCompleted}: TodoListProps) => {
    const hasSelection = selectedIds.length > 0
    if (todos.length === 0) {
        return (
            <div className={styles.empty}>
                <p>Нет задач. Добавьте новую задачу</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <button className={styles.selectBtn} onClick={onSelectAll}>Выбрать все</button>
                {hasSelection && (
                    <button className={styles.clearBtn} onClick={onClearSelection}>Очистить выбор</button>
                )}
            </div>
            <div className={styles.list}>
                {todos.map((todo, index) => (
                    <TodoItem 
                    key={todo.id}
                    todo={todo} 
                    onToggle={onToggle} 
                    onDelete={onDelete} 
                    isSelected={selectedIds.includes(todo.id)} 
                    isFirst = {index === 0} 
                    isLast = {index === todos.length - 1}
                    onMoveUp={onMoveUp}
                    onMoveDown={onMoveDown}
                    onToggleSelection={onToggleSelection}
                    />
                ))}
            </div>
            {hasSelection && (
                <div className={styles.bulkActions}>
                    <button className={styles.bulkCompleteBtn} onClick={onBulkToggle}>{allSelectedCompleted ? 'Сделать невыполненным' : 'Сделать выполненным'}</button>
                    <button className={styles.bulkDeleteBtn} onClick={onBulkDelete}>Удалить</button>
                </div>
            )}
        </div>
    )
}

export default TodoList