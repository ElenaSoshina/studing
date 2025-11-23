import Chat from './components/Chat'
import './App.css'
import Toggle from './components/Toggle'
import Dashboard from './components/DebouncedButton/Dashboard'
import ChatState from './components/ChatState'
import VideoPlayer from './components/VideoPlayer'
import Page from './components/Page'
import CatFriends from './components/CatFriends'

function App() {


  return (
    <>
      <div>
        <Chat />
      </div>
      <div>
        <Toggle />
      </div>
      <div>
        <Dashboard />
      </div>
      <div>
        <ChatState />
      </div>
      <div>
        <VideoPlayer />
      </div>
      <div>
        <Page />
      </div>
      <div>
        <CatFriends />
      </div>
    </>
  )
}

export default App
