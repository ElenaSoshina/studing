import Button from '../ui/Button/Button'
import styles from './AddTaskForm.module.css'
import {type FormEvent, useState} from 'react'
import Input from '../ui/Input/Input'

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
            <Input type="text" placeholder={placeholder} value={value} onChange={setValue}/>
            <Button type='submit' variant='primary'>Добавить</Button>
        </form>
    )
}

export default AddTaskForm