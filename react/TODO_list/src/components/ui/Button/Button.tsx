import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from './Button.module.css'
export type ButtonVariant = 'primary' | 'danger' | 'success' | 'secondary' | 'move'
export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = {
    variant?: ButtonVariant,
    size?: ButtonSize,
    children: ReactNode,
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
    variant = 'primary',
    size = 'medium',
    children,
    className='',
    type = 'button',
    disabled = false,
    ...props
}: ButtonProps) => {
    const buttonClass = [
        styles.button,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <button
            type={type}
            className={buttonClass}
            disabled={disabled}
            {...props}
        >{children}</button>
    )
}

export default Button