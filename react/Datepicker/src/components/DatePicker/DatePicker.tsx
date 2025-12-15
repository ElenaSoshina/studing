import { buildCalendarDays } from "./buildCalendarDays"
import { parseISODate, startOfDay, type WeekStartsOn } from "./dateUtils"
import { useEffect, useMemo, useReducer } from 'react'
import styles from './DatePicker.module.css'
import MonthHeader from "../ui/MonthHeader/MonthHeader"
import WeekdaysHeader from "../ui/WeekdaysHeader/WeekdaysHeader"
import CalendarGrid from "../ui/CalendarGrid/CalendarGrid"
import type { LocaleOption } from "../ui/LocaleSwitcher/LocaleSwitcher"
import LocaleSwitcher from "../ui/LocaleSwitcher/LocaleSwitcher"
import { getInitialState, reducer } from "./datePickerReducer"

export type DatePickerProps = {
    value?: string
    defaultValue?: string
    onChange?: (value: string) => void
    locale?: string
    weekStartsOn?: WeekStartsOn
    onLocaleChange?: (locale: string) => void
    showLocaleSwitcher?: boolean
    locales?: LocaleOption[]
    defaultLocale?: string
}

export function DatePicker ({
    value,
    defaultValue,
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
    const today = useMemo(() => startOfDay(new Date()), [])

    const parsedValue = useMemo(() => (value ? parseISODate(value) : null), [value])
    const parsedDefaultValue = useMemo(
        () => (defaultValue ? parseISODate(defaultValue) : null),
        [defaultValue]
    )

    const initialSelected = useMemo(() => {
        if (parsedValue) return startOfDay(parsedValue)

        if (parsedDefaultValue) return startOfDay(parsedDefaultValue)

        return today
    }, [parsedValue, parsedDefaultValue, today])

    const [state, dispatch] = useReducer(
        reducer,
        { initialSelected, defaultLocale },
        ({ initialSelected, defaultLocale }) => getInitialState({ initialSelected, defaultLocale })
    )

    const effectiveLocale = locale ?? state.internalLocale
    const effectiveWeekStartsOn = weekStartsOn ?? state.internalWeekStartsOn

    const selected = useMemo(() => {
        if (!isControlled) return state.uncontrolledSelected
        return parsedValue ? startOfDay(parsedValue) : today
    }, [isControlled, state.uncontrolledSelected, parsedValue, today])

    useEffect(() => {
        if (!isControlled) return 
        if (!parsedValue) return

        dispatch({ type: 'syncControlledValue', date: parsedValue })
    }, [isControlled, parsedValue])

    const monthLabel = useMemo(() => {
        return new Intl.DateTimeFormat(effectiveLocale, {month: 'long', year: 'numeric'}).format(state.viewDate)
    }, [effectiveLocale, state.viewDate])

    const days = useMemo(() => 
        buildCalendarDays({
            viewDate: state.viewDate,
            selected,
            today,
            weekStartsOn: effectiveWeekStartsOn
        })
    , [
        state.viewDate,
        selected,
        today,
        effectiveWeekStartsOn
    ])

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