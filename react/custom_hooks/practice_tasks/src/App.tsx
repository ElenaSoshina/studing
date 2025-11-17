import { useState } from 'react'
import Demo from './components/Demo/DemoFirstRender'
import DemoUseProducts from './components/Demo/DemoUseProducts'
import './App.css'
import DemoUseThrottleCallback from './components/Demo/DemoUseThrottleCallback'
import DemoUseLocalStorageState from './components/Demo/DemoUseLocalStorageState'
import DemoUseDeferred from './components/Demo/DemoUseDeferred'

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <>
      <div style={{ maxWidth: 520, margin: '24px auto', fontFamily: 'sans-serif' }}>
        <h2>useIsFirstRender hook demo</h2>
        <button onClick={() => setMounted(prev => !prev)}>
          {mounted ? 'Unmount' : 'Mount'}
        </button>
        {mounted && <Demo />}
      </div>
      <div style={{ maxWidth: 520, margin: '24px auto', fontFamily: 'sans-serif' }}>
        <DemoUseProducts />
      </div>
      <div style={{ maxWidth: 520, margin: '24px auto', fontFamily: 'sans-serif' }}>
        <DemoUseThrottleCallback />
      </div>
      <div style={{ maxWidth: 520, margin: '24px auto', fontFamily: 'sans-serif' }}>
        <DemoUseLocalStorageState />
      </div>
      <div style={{ maxWidth: 520, margin: '24px auto', fontFamily: 'sans-serif' }}>
        <DemoUseDeferred />
      </div>
    </>
  )
}

export default App
