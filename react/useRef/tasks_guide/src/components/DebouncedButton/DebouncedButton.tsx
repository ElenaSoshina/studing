import { useRef, useEffect } from "react";


export default function DebouncedButton({ onClick, children }: { onClick: () => void, children: React.ReactNode }) {
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const handleClick = () => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            onClick()
            timeoutRef.current = null
        }, 1000)
    }
  return (
    <button onClick = {handleClick}>{children}</button>
  );
}