import React from 'react'
import styles from './Button.module.css'

export type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'icon'
    ariaLabel?: string
    type?: 'button' | 'submit' | 'reset'
    className?: string
}

export function Button ({
    children,
    onClick,
    disabled = false,
    variant = 'secondary',
    size = 'md',
    ariaLabel,
    type='button',
    className
}: ButtonProps) {
    return (
        <button
            type={type}
            className={[styles.root, styles[variant], styles[size], className].filter(Boolean).join(' ')}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    )
}

export default Button