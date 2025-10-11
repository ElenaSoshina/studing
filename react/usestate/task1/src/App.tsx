import './App.css'
import Count from './components/Count'
import Paragraph from './components/Paragraph'
import Slider from './components/Slider/Slider'
import img1 from './assets/1.jpeg'
import img2 from './assets/2.jpeg'
import img3 from './assets/3.jpeg'
import img4 from './assets/4.jpeg'
import InputText from './components/InputText'

function App() {
  const images = [img1, img2, img3, img4]

  return (
    <>
      <Count />
      
      <Paragraph />

      <Slider images = {images} visible = {2}/>

      <InputText max={10} min={2}/>
    </>
  )
}

export default App
