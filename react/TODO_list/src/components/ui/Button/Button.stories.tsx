import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'danger', 'success', 'secondary', 'move'],
            description: 'Визуальный вариант кнопки'
        },
        size: {
            control: 'select',
            options: ['small', 'medium','large'],
            description: 'Размер кнопки'
        },
        disabled: {
            control: 'boolean',
            description: 'Отключенное состояние'
        },
        children: {
            control: 'text',
            description: 'Содержимое кнопки'
        }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Добавить задачу'
    }
}

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Выполнено'
    }
}

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Удалить'
    }
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Отмена'
    }
}

export const Move: Story = {
    args: {
        variant: 'move',
        children: '↑'
    }
}

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Маленькая кнопка'
    }
}

export const Medium: Story = {
    args: {
        size: 'medium',
        children: 'Средняя кнопка'
    }
}

export const Large: Story = {
    args: {
        size: 'large',
        children: 'Большая кнопка'
    }
}

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Отключено'
    }
}

export const DisabledDanger: Story = {
    args: {
        variant: 'danger',
        disabled: true,
        children: 'Нельзя удалить'
    }
}

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <Button variant='primary'>Primary</Button>
            <Button variant='success'>Success</Button>
            <Button variant='danger'>Danger</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='move'>↑</Button>
        </div>
    )
}

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </div>
    )
}

export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary">
                ➕ Добавить
            </Button>
            <Button variant="success">
                ✓ Выполнено
            </Button>
            <Button variant="danger">
                ✕ Удалить
            </Button>
        </div>
    )
}

export const TodoAppExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Форма добавления:</h3>
                <Button variant="primary" type="submit">Добавить</Button>
            </div>
            
            <div>
                <h3>Действия над задачей:</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="success">Выполнено</Button>
                    <Button variant="move">↑</Button>
                    <Button variant="move">↓</Button>
                    <Button variant="danger" size="small">✕</Button>
                </div>
            </div>
            
            <div>
                <h3>Массовые действия:</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="secondary">Выбрать все</Button>
                    <Button variant="success">Сделать выполненным</Button>
                    <Button variant="danger">Удалить выбранные</Button>
                </div>
            </div>
        </div>
    )
}