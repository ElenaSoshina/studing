import { addMonths, startOfDay, startOfMonth, type WeekStartsOn } from "./dateUtils"


type State = {
    viewDate: Date
    uncontrolledSelected: Date
    internalLocale: string
    internalWeekStartsOn: WeekStartsOn
}

type Action = 
| { type: 'prevMonth' } 
| { type: 'nextMonth' }
| { type: 'pickDay'; date: Date; isControlled: boolean }
| { type: 'pickLocale'; locale: string; isLocaleControlled: boolean }
| { type: 'syncControlledValue'; date: Date }

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'prevMonth':
            return {...state, viewDate: addMonths(state.viewDate, -1)}
        case 'nextMonth':
            return {...state, viewDate: addMonths(state.viewDate, 1)}
        case 'pickDay' :
            const nextView = startOfMonth(action.date)
            return {
                ...state,
                viewDate: nextView,
                uncontrolledSelected: action.isControlled ? state.uncontrolledSelected : startOfDay(action.date)
            }
            case 'pickLocale': {
                if (action.isLocaleControlled) return state
                return {
                    ...state,
                    internalLocale: action.locale,
                    internalWeekStartsOn: action.locale === 'en-US' ? 0 : 1
                }
            }
            case 'syncControlledValue': 
                return {...state, viewDate: startOfMonth(action.date)}
            default:
                return state
    }
}

export function getInitialState(params: {
    initialSelected: Date
    defaultLocale: string
}): State {
    return {
        viewDate: startOfMonth(params.initialSelected),
        uncontrolledSelected: params.initialSelected,
        internalLocale: params.defaultLocale,
        internalWeekStartsOn: params.defaultLocale === 'en-US' ? 0 : 1
    }
}
