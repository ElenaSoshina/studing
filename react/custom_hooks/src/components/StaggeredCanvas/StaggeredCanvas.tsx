import { useRef } from 'react'
import { usePointerPosition } from '../../hooks/usePointerPosition'
import { useDelayedValue } from '../../hooks/useDelayedValue'
import Dot from '../Dot/Dot'

export default function StaggeredCanvas() {
  const boxRef = useRef<HTMLDivElement>(null)
  const base = usePointerPosition(boxRef)

  const delays = [0, 100, 200, 300, 450] as const
  const positions = delays.map(d => useDelayedValue(base, d))

  return (
    <div
      ref={boxRef}
      style={{ position: 'relative', height: 300, border: '1px solid #ddd', marginTop: 16, overflow: 'hidden' }}
    >
      {positions.map((pos, i) => (
        <Dot key={i} position={pos} opacity={1 - i * 0.2} />
      ))}
    </div>
  )
}