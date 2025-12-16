export type WeekStartsOn = 0 | 1

export function pad2(n: number) {
    return n < 10 ? `0${n}` : `${n}`
}

export function formatISODate(d: Date) {
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

export function parseISODate(value: string): Date | null {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
    if (!m) return null

    const y = Number(m[1])
    const mo = Number(m[2])
    const da = Number(m[3])

    const d = new Date(y, mo - 1, da)

    if (d.getFullYear() !== y || d.getMonth() !== mo - 1 || d.getDate() !== da) return null

    return d
}

export function startOfDay(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function startOfMonth(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), 1)
}

export function addDays(d: Date, delta: number) {
    const res = new Date(d)
    res.setDate(res.getDate() + delta)
    return res
}

export function addMonths(d: Date, delta: number) {
    return new Date(d.getFullYear(), d.getMonth() + delta, 1)
}

export function startOfWeek(d: Date, weekStartsOn: WeekStartsOn) {
    const date = startOfDay(d)
    const day = date.getDay()

    const diff = (day - weekStartsOn + 7) % 7
    date.setDate(date.getDate() - diff)

    return date
}

export function isSameDay(a: Date, b: Date) {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    )
}

export function getMonthGrid(viewDate: Date, weekStartsOn: WeekStartsOn) {
    const firstOfMonth = startOfMonth(viewDate)
    const firstGridDay = startOfWeek(firstOfMonth, weekStartsOn)
  
    const days: Date[] = []
    for (let i = 0; i < 42; i++) {
      days.push(addDays(firstGridDay, i))
    }
    return days
  }