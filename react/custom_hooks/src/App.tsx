import { useState, useRef } from 'react';
import './App.css'
import {useCounter} from "./hooks/useCounter.ts";
import { useDelayedValue } from './hooks/useDelayedValue.ts';
import {usePointerPosition} from './hooks/usePointerPosition.ts'

function Counter({delay}: {delay: number}) {
    const count = useCounter(delay);
    return <h1>Seconds passed: {count}</h1>;
}

function Dot({position, opacity}: {position: {x: number, y: number}, opacity: number}) {
    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40, 
        }}></div>
    )
}

function StaggeredCanvas() {
    const boxRef = useRef<HTMLDivElement>(null)
    const pos1 = usePointerPosition(boxRef)
    const pos2 = useDelayedValue(pos1, 100)
    const pos3 = useDelayedValue(pos2, 200)
    const pos4 = useDelayedValue(pos3, 100)
    const pos5 = useDelayedValue(pos3, 50)

    return (
        <div ref = {boxRef} 
        style={{
            position: 'relative',
            height: 300,
            border: '1px solid #ddd',
            marginTop: 16,
            overflow:'hidden' 
        }}>
            <Dot position={pos1} opacity={1} />
            <Dot position={pos2} opacity={0.8} />
            <Dot position={pos3} opacity={0.6} />
            <Dot position={pos4} opacity={0.4} />
            <Dot position={pos5} opacity={0.2} />
        </div>
    )
}


function App() {
    const [delay, setDelay] = useState(1000)
    return (
        <>
            <label>
                Tick duration: {delay} ms
                <br />
                <input
                    type="range"
                    value={delay}
                    min="10"
                    max="2000"
                    onChange={e => setDelay(Number(e.target.value))}
                />
            </label>
            <hr />
            <Counter delay={delay}/>
            <hr />
            <StaggeredCanvas/>
        </>
        
    )
}

export default App
