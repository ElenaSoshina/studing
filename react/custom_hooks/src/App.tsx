import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
import StaggeredCanvas from './components/StaggeredCanvas/StaggeredCanvas'
import DelaySlider from './components/DelaySlider/DelaySlider'

export default function App() {
  const [delay, setDelay] = useState(1000)

  return (
    <>
      <DelaySlider value={delay} onChange={setDelay} />
      <hr />
      <Counter delay={delay} />
      <hr />
      <StaggeredCanvas />
    </>
  )
}