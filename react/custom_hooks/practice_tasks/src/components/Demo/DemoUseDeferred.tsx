import { useEffect, useState } from 'react'
import useDeferred from '../../hooks/useDeffered'

export default function DemoUseDeferred() {
  const [deferred, resolveDeferred] = useDeferred<void>()
  const [status, setStatus] = useState<'pending' | 'resolved'>('pending')

  useEffect(() => {
    let mounted = true
    deferred.then(() => mounted && setStatus('resolved'))
    return () => { mounted = false }
  }, [deferred])

  return (
    <div>
      <h2>useDeferred demo</h2>
      <p>Status: {status}</p>
      <button onClick={() => resolveDeferred(undefined)} disabled={status === 'resolved'}>
        Resolve
      </button>
    </div>
  )
}