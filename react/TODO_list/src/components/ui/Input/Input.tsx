import { forwardRef } from "react"
import type { InputHTMLAttributes } from "react"
import styles from './Input.module.css'

export type InputSize = 'small' | 'medium' | 'large'
export type InputProps = {
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
    error?: string
    size?: InputSize
    label?: string
    className?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>


const Input = forwardRef<HTMLInputElement, InputProps>(({
    value,
    onChange,
    placeholder,
    error,
    size = 'medium',
    label,
    className = '',
    disabled = false,
    type = 'text',
    ...props
}, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const inputClass = [
        styles.input,
        styles[size],
        error && styles.error,
        disabled && styles.disabled,
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className={styles.wrapper}>
            {label && (
                <label className={styles.label}>
                    {label}
                </label>
            )}

            <input 
                ref={ref}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
                className={inputClass}
                {...props}
            />

            {error && (
                <span className={styles.errorMessage}>
                    {error}
                </span>
            )}
        </div>
    )
})

Input.displayName = 'Input'
export default Input
