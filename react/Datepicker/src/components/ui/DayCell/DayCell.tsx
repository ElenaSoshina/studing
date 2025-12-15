import styles from './DayCell.module.css'

export type DayCellProps = {
    day: number
    iso: string
    isOutsideMonth?: boolean
    isToday?: boolean
    isSelected?: boolean
    isDisabled?: boolean
    onClick?: (iso: string) => void
}

export function DayCell({
    day,
    iso,
    isOutsideMonth = false,
    isToday = false,
    isSelected = false,
    isDisabled = false,
    onClick,
}: DayCellProps) {
    return (
        <button type='button'
            className={[
                styles.root,
                isOutsideMonth ? styles.outside : '',
                isToday ? styles.today : '',
                isSelected ? styles.selected : ''
            ]
            .filter(Boolean)
            .join(' ')
        }
            onClick={() => onClick?.(iso)}
            disabled={isDisabled}
            aria-selected={isSelected}
            aria-label={iso}
    >
        {day}
        </button>
    )
}

export default DayCell