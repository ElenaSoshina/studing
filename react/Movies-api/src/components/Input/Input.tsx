import styles from './Input.module.css'

type InputProps = {
    value: string
    onChange: (v:string) => void
    placeholder?: string
}

const Input = ({value, onChange, placeholder = 'Search movie...'}: InputProps) => {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input} type="text" value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder}/>
        </div>
    )
}

export default Input