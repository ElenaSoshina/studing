import { useRef, useState } from 'react'

export default function ShowWidth() {
    const divRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number | null>(null)

    const handleShowWidth = () => {
        const w = divRef.current?.getBoundingClientRect().width
        if (w) {
            setWidth(w)
        }
    }
    return (
        <>
        <h1>ShowWidth</h1>

        <div>
            <div ref={divRef} style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>
                

            </div>
            <button onClick={handleShowWidth} style={{ marginTop: '10px' }}>Show Width</button>
                {width !== null && (
                    <p>Width: {width}</p>
                )}
        </div>
        </>
    )
}