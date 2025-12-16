import styles from './LocaleSwitcher.module.css'

export type LocaleOption = {
    label: string
    value: string
}

export type LocaleSwitcherProps = {
    value: string
    options: LocaleOption[]
    onChange: (value: string) => void
}

export function LocaleSwitcher ({
    value,
    options,
    onChange
}: LocaleSwitcherProps) {
    return (
        <div className={styles.root} role='group' aria-label='Local switcher'>
            {options.map((opt) => {
                const isActive = opt.value === value

                return (
                    <button
                        key={opt.value}
                        type='button'
                        className={[styles.button, isActive ? styles.active : ''].filter(Boolean).join(' ')}
                        onClick={() => onChange(opt.value)}
                        aria-pressed={isActive}
                    >
                        {opt.label}
                    </button>
                )
            })}
        </div>
    )

}

export default LocaleSwitcher