import type { Todo, TodoAction } from '../types/todo'

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
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
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, complited: !todo.complited }
                    : todo
            )
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
            if (index >= state.length - 1) return state

            const newState = [...state]
            const temp = newState[index]
            newState[index] = newState[index + 1]
            newState[index + 1] = temp
            return newState
        }

        case 'bulkToggle': {
            return state.map(todo =>
                action.ids.includes(todo.id)
                    ? { ...todo, complited: action.complited }
                    : todo
            )
        }

        case 'bulkDelete': {
            return state.filter(todo => !action.ids.includes(todo.id))
        }

        default:
            return state
    }
}