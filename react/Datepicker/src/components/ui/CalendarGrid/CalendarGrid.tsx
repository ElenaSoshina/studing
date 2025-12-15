import { DayCell, type DayCellProps } from "../DayCell/DayCell"
import styles from './CalendarGrid.module.css'


export type CalendarDay = Omit<DayCellProps, 'onClick'>;

export type CalendarGridProps = {
    days: CalendarDay[]
    onDayClick?: (iso: string) => void
}

export const CalendarGrid = ({ days, onDayClick}: CalendarGridProps) => {
    return (
        <div 
        className={styles.root} 
        role="grid"
        aria-label="Calendar grid">
            {days.map((day) => (
                <DayCell key={day.iso}
                {...day}
                onClick={onDayClick}/>
            ))}
        </div>
    )
}

export default CalendarGrid