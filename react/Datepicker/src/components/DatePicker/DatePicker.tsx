import { buildCalendarDays } from "./buildCalendarDays"
import { parseISODate, startOfDay, type WeekStartsOn } from "./dateUtils"
import { useEffect, useReducer } from 'react'
import styles from './DatePicker.module.css'
import MonthHeader from "../ui/MonthHeader/MonthHeader"
import WeekdaysHeader from "../ui/WeekdaysHeader/WeekdaysHeader"
import CalendarGrid from "../ui/CalendarGrid/CalendarGrid"
import type { LocaleOption } from "../ui/LocaleSwitcher/LocaleSwitcher"
import LocaleSwitcher from "../ui/LocaleSwitcher/LocaleSwitcher"
import { getInitialState, reducer } from "./datePickerReducer"

export type DatePickerProps = {
    value: string
    onChange: (value: string) => void
    locale?: string
    weekStartsOn?: WeekStartsOn
    onLocaleChange?: (locale: string) => void
    showLocaleSwitcher?: boolean
    locales?: LocaleOption[]
    defaultLocale?: string
}

export function DatePicker ({
    value,
    onChange,
    onLocaleChange,
    locale,
    weekStartsOn,
    defaultLocale = 'ru-RU',
    locales = [
        { label: 'RU', value: 'ru-RU' },
        { label: 'EN', value: 'en-US' },
    ],
    showLocaleSwitcher = true,
}: DatePickerProps) {
    
    const isControlled = value !== undefined
    const today = startOfDay(new Date())
    const parsedValue = value ? parseISODate(value) : null
    const initialSelected = parsedValue ? startOfDay(parsedValue) : today

    const [state, dispatch] = useReducer(
        reducer,
        { initialSelected, defaultLocale },
        ({ initialSelected, defaultLocale }) => getInitialState({ initialSelected, defaultLocale })
    )

    const effectiveLocale = locale ?? state.internalLocale
    const effectiveWeekStartsOn = weekStartsOn ?? state.internalWeekStartsOn
    const selected = !isControlled
        ? state.uncontrolledSelected
        : (parsedValue ? startOfDay(parsedValue) : today)

    useEffect(() => {
        if (!isControlled) return 
        if (!parsedValue) return

        dispatch({ type: 'syncControlledValue', date: parsedValue })
    }, [isControlled, parsedValue])

    const monthLabel = new Intl.DateTimeFormat(effectiveLocale, { month: 'long', year: 'numeric' }).format(state.viewDate)

    const days = buildCalendarDays({
        viewDate: state.viewDate,
        selected,
        today,
        weekStartsOn: effectiveWeekStartsOn
    })

    const handleDayClick = (iso: string) => {
        const d = parseISODate(iso)
        if (!d) return

        onChange?.(iso)

        dispatch({ type: 'pickDay', date: d, isControlled })
    }

    const handleLocalePick = (nextLocale: string) => {
        onLocaleChange?.(nextLocale)
        dispatch({ type: 'pickLocale', locale: nextLocale, isLocaleControlled: locale !== undefined })
    }
    return (
        <>
            <h1>DatePicker</h1>
            {showLocaleSwitcher && (
                <div className={styles.localeRow}>
                    <LocaleSwitcher value={effectiveLocale} options={locales} onChange={handleLocalePick} />
                </div>
            )}
            <div className={styles.root}>
                <MonthHeader 
                    label={monthLabel}
                    onPrev={() => dispatch({ type: 'prevMonth' })}
                    onNext={() => dispatch({ type: 'nextMonth' })}
                />
                <WeekdaysHeader 
                    locale={effectiveLocale}
                    weekStartsOn={effectiveWeekStartsOn}
                />
                <CalendarGrid 
                    days={days}
                    onDayClick={handleDayClick}
                />
            </div>
        </>
    )
}

export default DatePicker