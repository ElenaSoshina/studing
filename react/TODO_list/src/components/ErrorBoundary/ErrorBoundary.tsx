import { type ReactNode, Component } from "react";
import styles from './ErrorBoundary.module.css'
import Button from "../ui/Button/Button";

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false
    }

    static getDerivedStateFromError() {
        return { hasError: true}
    }

    componentDidCatch(error: Error) {
        console.error('ErrorBoundary caught an error:', error)
    }

    handleReset = () => {
        this.setState({ hasError: false })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.errorContainer}>
                    <h2 className={styles.title}>Произошла ошибка</h2>
                    <p className={styles.message}>Произошла ошибка при отображении компонента</p>
                    <Button variant='primary' onClick={this.handleReset}>Сбросить ошибку</Button>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary