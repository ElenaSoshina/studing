import { useState, useEffect } from "react"
function useLocalStorageState<T> (key: string, initialValue: T)  {
    const [state, setState] = useState<T>(() => {
        try{
            const resultRaw = localStorage.getItem(key)
            if (resultRaw == null) {
                return initialValue
            }
            return JSON.parse(resultRaw)
        } catch (error) {
            console.error('Error parsing localStorage value for key:', key, error)
            return initialValue
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state))
        } catch (error) {
            console.error('Error saving to localStorage for key:', key, error)
        }
    }, [state, key])

    return [state, setState] as const
}

export default useLocalStorageState