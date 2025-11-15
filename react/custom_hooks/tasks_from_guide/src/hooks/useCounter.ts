import {useState} from 'react'
import {useInterval} from './useInterval'

export function useCounter(delay: number) {
    const [count, setCount] = useState(0)

    // useEffect(() => {
        // if (delay < 0) return
        // const id = setInterval(() => {
        //     setCount(count => count + 1)
        // }, delay)
        // return () => clearInterval(id)
        useInterval(() => {
            setCount(count => count + 1)
        }, delay)
    // }, [delay])
    return count
}