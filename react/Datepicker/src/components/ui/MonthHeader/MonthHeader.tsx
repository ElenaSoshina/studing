import styles from './MonthHeader.module.css'
import Button from '../Button/Button'

export type MonthHeaderProps = {
    label: string
    onPrev?: () => void
    onNext?: () => void
}


export function MonthHeader ({label, onPrev, onNext}: MonthHeaderProps) {
    return (
        <div
            className={styles.root}
        >
            <Button
                type='button'
                variant='secondary'
                size='icon'
                onClick={onPrev}
                ariaLabel='Previous month'
            >
                ←
            </Button>
            <div className={styles.label}>{label}</div>
            <Button
                type='button'
                variant='secondary'
                size='icon'
                onClick={onNext}
                ariaLabel='Next month'
            >
                →
            </Button>
        </div>
    )
}

export default MonthHeader