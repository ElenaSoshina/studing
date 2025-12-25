import './App.css'
import { MediaPlayer } from './components/MediaPlayer/MediaPlayer'

function App() {

  return (
    <>
      <div>
        <h1>Media Player</h1>
        <MediaPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </div>
    </>
  )
}

export default App
