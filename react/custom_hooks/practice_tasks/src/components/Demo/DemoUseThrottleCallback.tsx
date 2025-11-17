import { useState } from 'react'
import useThrottleCallback from '../../hooks/useThrottleCallback'

const DemoUseThrottleCallback = () => {
    const [delay, setDelay] = useState(500)
    const [raw, setRaw] = useState(0)
    const [throttled, setThrottled] = useState(0)

    const onMoveThrottled = useThrottleCallback(() => {
        setThrottled(c => c + 1)
    }, delay, [])

    const onMove = () => {
        setRaw(c => c + 1)
        onMoveThrottled()
    }

    return (
        <div>
            <h2>useThrottleCallback hook demo</h2>

            <label>
                Delay: {delay} ms
                <br />
                <input
                    type="range"
                    min={0}
                    max={2000}
                    value={delay}
                    onChange={(e) => setDelay(Number(e.target.value))}
                />
            </label>

            <div style={{ marginTop: 12 }}>
                <p>Raw mousemove events: {raw}</p>
                <p>Throttled calls: {throttled}</p>
                <button onClick={() => { setRaw(0); setThrottled(0); }}>
                    Reset
                </button>
            </div>

            <div
                onMouseMove={onMove}
                style={{
                    height: 220,
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    marginTop: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    userSelect: 'none',
                    background: '#f9fafb'
                }}
            >
                Move your mouse here
            </div>
        </div>
    )
}

export default DemoUseThrottleCallback