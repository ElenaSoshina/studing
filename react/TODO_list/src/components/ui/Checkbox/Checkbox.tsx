import type { InputHTMLAttributes } from "react"
import styles from './Checkbox.module.css'
import { forwardRef } from "react"

export type CheckboxSize = 'small' | 'medium' | 'large'

export type CheckboxProps = {
    checked?: boolean
    onChange?: (checked: boolean) => void
    size?: CheckboxSize
    label?: string
    className?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'type' >

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
    checked = false,
    onChange,
    size = 'medium',
    label,
    className = '',
    disabled = false,
    ...props
}, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked)
    }

    const checkboxClass = [
        styles.checkbox,
        styles[size],
        disabled && styles.disabled,
        className
    ]
    .filter(Boolean)
    .join(' ')

    const wrapperClass = [
        styles.wrapper,
        disabled && styles.wrapperDisabled,
        className
    ]
    .filter(Boolean)
    .join(' ')

    return (
        <label className={wrapperClass}>
            <input
                ref={ref}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                className={checkboxClass}
                {...props}
            />
            {label && (
                <span className={styles.label}>{label}</span>
            )}
        </label>
    )
})

Checkbox.displayName = 'Checkbox'
export default Checkbox
