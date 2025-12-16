import type { CalendarDay } from "../ui/CalendarGrid/CalendarGrid"
import { formatISODate, getMonthGrid, isSameDay, type WeekStartsOn } from "./dateUtils"

type Params = {
    viewDate: Date
    selected: Date
    today: Date
    weekStartsOn: WeekStartsOn
}

export function buildCalendarDays({ viewDate, selected, today, weekStartsOn}: Params): CalendarDay[] {
    const gridDates = getMonthGrid(viewDate, weekStartsOn)

    const viewMonth = viewDate.getMonth()
    const viewYear = viewDate.getFullYear()

    return gridDates.map((d) => {
        const iso = formatISODate(d)
        const outside = d.getMonth() !== viewMonth || d.getFullYear() !== viewYear

        return {
            day: d.getDate(),
            iso,
            isOutsideMonth: outside,
            isToday: isSameDay(d, today),
            isSelected: isSameDay(d, selected)
        }
    })
}