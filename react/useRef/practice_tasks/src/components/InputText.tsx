import { useRef, useEffect } from 'react';

export default function InputText() {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    return (
        <div>
            <h1>InputText</h1>
            <input type="text" ref={inputRef}/>
        </div>
    )
}