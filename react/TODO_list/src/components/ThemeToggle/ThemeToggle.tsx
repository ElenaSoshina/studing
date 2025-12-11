import { useTheme } from "../../contexts/ThemeContext"
import Button from "../ui/Button/Button"

const ThemeToggle = () => {
    const {theme, toggle} = useTheme()

    return (
        <div style={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: 1000
          }}>
            <Button variant="secondary" onClick={toggle}>
              {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
            </Button>
          </div>
    )
}

export default ThemeToggle