
import './App.css'
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import {useReducer, useState} from "react";
import TodoList from './components/TodoList/TodoList.tsx';


export type Todo = {
    id: string
    text: string
    complited: boolean
}

type Action = {
    type: 'add'
    text: string
} | {
    type: 'toggle'
    id: string
} | {
    type: 'delete'
    id: string
} | {
    type: 'moveUp'
    id: string
} | {
    type: 'moveDown'
    id: string
} | {
    type: 'bulkToggle'
    ids: string[]  // ids - массив идентификаторов (несколько задач)
    complited: boolean
} | {
    type: 'bulkDelete'
    ids: string[]
    complited: boolean
}

function reducer (state: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case 'add': {
            const todo: Todo = {
                id: Date.now().toString(),
                text: action.text,
                complited: false
            }
            return [todo, ...state]
        }
        case 'toggle': {
            return state.map(todo => todo.id === action.id ? {...todo, complited: !todo.complited} : todo)
        }
        case 'delete': {
            return state.filter(todo => todo.id !== action.id)
        }
        case 'moveUp': {
            const index = state.findIndex(todo => todo.id === action.id)
            if (index <= 0) return state
            const newState = [...state]
            const temp = newState[index]
            newState[index] = newState[index - 1]
            newState[index - 1] = temp
            return newState
        }
        case 'moveDown': {
            const index = state.findIndex(todo => todo.id === action.id)
            if (index >= state.length -1) return state
            const newState = [...state]
            const temp = newState[index]
            newState[index] = newState[index + 1]
            newState[index + 1] = temp
            return newState
        }
        case 'bulkToggle': {
            return state.map(todo => action.ids.includes(todo.id) ? {...todo, complited: action.complited} : todo)
        }
        case 'bulkDelete': {
            return state.filter(todo => !action.ids.includes(todo.id))
        }
        default:
            return state
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [selectedIds, setSelectedIds] = useState<string[]>([])

    const handleAdd = (text: string) => dispatch({type: 'add', text})
    const hangleToggle = (id: string) => dispatch({type: 'toggle', id})
    const hangleDelete = (id: string) => dispatch({type: 'delete', id})
    const handleMoveUp = (id: string) => dispatch({type: 'moveUp', id})
    const handleMoveDown = (id: string) => dispatch({type: 'moveDown', id})
    const handleToggleSelection = (id: string) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(selectedId => selectedId !== id) : [...prev, id])
    }
    const handleSelectAll = () => {
        setSelectedIds(todos.map(todo => todo.id))
    }
    const handleClearSelection = () => {
        setSelectedIds([])
    }
    const handleBulkToggle = () => {
        const complited = selectedIds.every(id => todos.find(todo => todo.id === id)?.complited)
        dispatch({
            type: 'bulkToggle',
            ids: selectedIds,
            complited: !complited
        })
        setSelectedIds([])
    }
    const handleBulkDelete = () => {
        dispatch({type: 'bulkDelete',ids: selectedIds, complited: false})
        setSelectedIds([])
    }
    const allSelectedCompleted = selectedIds.length > 0 && selectedIds.every(id => todos.find(todo => todo.id === id)?.complited)
  return (
    <>
      <AddTaskForm onAdd={handleAdd}/>
      <TodoList todos={todos}  selectedIds={selectedIds}
                onToggle={hangleToggle} 
                onDelete={hangleDelete} 
                onMoveUp={handleMoveUp}
                onMoveDown={handleMoveDown}
                onToggleSelection={handleToggleSelection}
                onSelectAll={handleSelectAll}
                onClearSelection={handleClearSelection}
                onBulkToggle={handleBulkToggle}
                onBulkDelete={handleBulkDelete}
                allSelectedCompleted={allSelectedCompleted}/>
    </>
  )
}

export default App
