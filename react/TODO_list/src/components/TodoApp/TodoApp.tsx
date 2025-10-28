import AddTaskForm from '../AddTaskForm/AddTaskForm'
import TodoList from '../TodoList/TodoList'
import { useTodos } from '../../hooks/useTodos'
import styles from './TodoApp.module.css'

const TodoApp = () => {
    const {
        todos,
        selectedIds,
        allSelectedCompleted,
        handleAdd,
        handleToggle,
        handleDelete,
        handleMoveUp,
        handleMoveDown,
        handleToggleSelection,
        handleSelectAll,
        handleClearSelection,
        handleBulkToggle,
        handleBulkDelete
    } = useTodos()

    return (
        <div className={styles.todoApp}>
            <h1 className={styles.title}>TODO List</h1>
            
            <AddTaskForm onAdd={handleAdd} />
            
            <TodoList
                todos={todos}
                selectedIds={selectedIds}
                onToggle={handleToggle}
                onDelete={handleDelete}
                onMoveUp={handleMoveUp}
                onMoveDown={handleMoveDown}
                onToggleSelection={handleToggleSelection}
                onSelectAll={handleSelectAll}
                onClearSelection={handleClearSelection}
                onBulkToggle={handleBulkToggle}
                onBulkDelete={handleBulkDelete}
                allSelectedCompleted={allSelectedCompleted}
            />
        </div>
    )
}

export default TodoApp