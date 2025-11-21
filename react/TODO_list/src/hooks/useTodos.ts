import { useReducer, useState, useCallback, useMemo } from 'react'
import { todoReducer } from '../store/todoReducer'
// import type { Todo } from '../types/todo'

export function useTodos() {
    const [todos, dispatch] = useReducer(todoReducer, [])
    const [selectedIds, setSelectedIds] = useState<string[]>([])

    const handleAdd = useCallback((text: string) => {
        dispatch({ type: 'add', text })
    }, [])

    const handleToggle = useCallback((id: string) => {
        dispatch({ type: 'toggle', id })
    }, [])

    const handleDelete = useCallback((id: string) => {
        dispatch({ type: 'delete', id })
    }, [])

    const handleMoveUp = useCallback((id: string) => {
        dispatch({ type: 'moveUp', id })
    }, [])

    const handleMoveDown = useCallback((id: string) => {
        dispatch({ type: 'moveDown', id })
    }, [])


    const handleToggleSelection = useCallback((id: string) => {
        setSelectedIds(prev =>
            prev.includes(id)
                ? prev.filter(selectedId => selectedId !== id)
                : [...prev, id]
        )
    }, [])

    const handleSelectAll = useCallback(() => {
        setSelectedIds(todos.map(todo => todo.id))
    }, [todos])

    const handleClearSelection = useCallback(() => {
        setSelectedIds([])
    }, [])


    const handleBulkToggle = useCallback(() => {
        const allCompleted = selectedIds.every(id =>
            todos.find(todo => todo.id === id)?.complited
        )

        dispatch({
            type: 'bulkToggle',
            ids: selectedIds,
            complited: !allCompleted
        })

        setSelectedIds([])
    }, [selectedIds, todos])

    const handleBulkDelete = useCallback(() => {
        dispatch({ type: 'bulkDelete', ids: selectedIds })
        setSelectedIds([])
    }, [selectedIds])


    const allSelectedCompleted = useMemo(() => selectedIds.length > 0 && selectedIds.every(id =>
        todos.find(todo => todo.id === id)?.complited
    ), [selectedIds, todos])

    return {
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
    }
}