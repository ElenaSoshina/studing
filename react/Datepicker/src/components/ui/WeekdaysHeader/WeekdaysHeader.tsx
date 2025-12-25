import styles from './WeekdaysHeader.module.css'

export type WeekdaysHeaderProps = {
    locale?: string
    weekStartsOn?: 0 | 1
    format?: 'short' | 'narrow'
}

function addDays(day: Date, delta: number) {
    const res = new Date(day)
    res.setDate(res.getDate() + delta)
    return res
}

function getWeekdayLabels(locale: string, weekStartsOn: 0 | 1, format: 'short' | 'narrow') {
    const fmt = new Intl.DateTimeFormat(locale, {weekday: format})

    const baseSunday = new Date(2021, 7, 1)

    const labels: string[] = []
    for (let i = 0; i < 7; i++) {
        const offset = (weekStartsOn + i) % 7
        labels.push(fmt.format(addDays(baseSunday, offset)))
    }
    return labels
}

const WeekdaysHeader = ({
    locale = 'ru-RU',
    weekStartsOn = 1,
    format = 'short'
}: WeekdaysHeaderProps) => {

    const labels = getWeekdayLabels(locale, weekStartsOn, format)
    return (
        <div className={styles.root} role="row">
        {labels.map((label) => (
  <div key={label} className={styles.cell} role="columnheader">
    {label}
  </div>
))}
      </div>
    )
}

export default WeekdaysHeader