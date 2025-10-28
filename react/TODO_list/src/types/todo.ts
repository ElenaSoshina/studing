export type Todo = {
    id: string
    text: string
    complited: boolean
}


export type TodoAction =
    | { type: 'add'; text: string }
    | { type: 'toggle'; id: string }
    | { type: 'delete'; id: string }
    | { type: 'moveUp'; id: string }
    | { type: 'moveDown'; id: string }
    | { type: 'bulkToggle'; ids: string[]; complited: boolean }
    | { type: 'bulkDelete'; ids: string[] }