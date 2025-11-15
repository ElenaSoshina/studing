import {useEffect, useRef} from "react";

export function useInterval(onTick: () => void, delay: number) {
    const savedCallback = useRef(onTick)
    useEffect(() => {
        savedCallback.current = onTick
    }, [onTick])

    useEffect(() => {
        if (delay == null || delay <= 0) return
        console.log('Set up the interval with delay', delay)
        const id = setInterval(()=>savedCallback.current(), delay)
        return () => {
            console.log('Clear the interval with delay', delay)
            clearInterval(id)}
    }, [delay]);
}