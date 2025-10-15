import styles from './AddTaskForm.module.css'
import {type FormEvent, useState} from 'react'
type AddTaskProps = {
    onAdd: (text: string) => void
    placeholder?: string
}

const AddTaskForm = ({onAdd, placeholder='Введите значение...'}: AddTaskProps) => {
    const [value, setValue] = useState<string>('')

    const submit = (e: FormEvent) => {
        e.preventDefault()
        const text = value.trim()
        if (!text) return
        onAdd(text)
        setValue('')
    }
    return (
        <form className={styles.container} onSubmit={submit}>
            <input type="text" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
            <button type='submit'>Добавить</button>
        </form>
    )
}

export default AddTaskForm