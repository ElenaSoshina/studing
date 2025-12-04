import './App.css'
import TodoApp from './components/TodoApp/TodoApp'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

function App() {
    return (
        <>
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>

        <TodoApp />
      </>
    )
}

export default App