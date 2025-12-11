import { useState } from 'react'
import Button from '../ui/Button/Button'

const ErrorThrower = () => {
    const [shouldThrow, setShouldThrow] = useState(false)

    if (shouldThrow) {
        throw new Error('Тестовая ошибка из ErrorThrower')
    }

    return (
        <div style={{
            padding: '1rem', 
            margin: '1rem', 
            border: '2px dashed #1976d2',
            borderRadius: '8px',
            backgroundColor: '#e3f2fd'
        }}>
            <h3>Тест ErrorThrower</h3>
            <p>Нажмите на кнопку ниже, чтобы выбросить ошибку</p>
            <Button variant='primary' onClick={() => setShouldThrow(true)}>Выбросить ошибку</Button>

        </div>
    )
}

export default ErrorThrower