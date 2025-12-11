import './App.css'
import TodoApp from './components/TodoApp/TodoApp'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import ErrorThrower from './components/ErrorThrower/ErrorThrower'

function App() {
    return (
        <>
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>

        <ErrorBoundary>
          <ErrorThrower />
         <TodoApp />
        </ErrorBoundary>
      </>
    )
}

export default App