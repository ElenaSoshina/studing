import type { Meta, StoryObj } from '@storybook/react-vite'
import Input from './Input'
import { useState } from 'react'

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Размер input'
        },
        disabled: {
            control: 'boolean',
            description: 'Отключенное состояние'
        },
        placeholder: {
            constrol: 'text',
            description: 'Текст placeholder'
        },
        label: {
            constrol: 'text',
            description: 'Текст label'
        },
        error: {
            constrol: 'text',
            description: 'Сообщение об ошибке'
        }
    }

}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        placeholder: 'Введите текст...',
    }
}

export const WithLabel: Story = {
    args: {
        label: 'Имя',
        placeholder: 'Введите имя...',
    }
}

export const WithError: Story = {
    args: {
        label: 'Email',
        placeholder: 'example@mail.com',
        error: 'Введите корректный email адрес',
        value: 'invalid-email'
    }
}

export const Disabled: Story = {
    args: {
        placeholder: 'Отключенный input',
        disabled: true,
        value: 'Нельзя редактировать'
    }
}

export const Small: Story = {
    args: {
        size: 'small',
        placeholder: 'Маленький input',
    }
}

export const Medium: Story = {
    args: {
        size: 'medium',
        placeholder: 'Средний input',
    }
}

export const Large: Story = {
    args: {
        size: 'large',
        placeholder: 'Большой input',
    }
}

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <Input size="small" placeholder="Маленький input" />
            <Input size="medium" placeholder="Средний input" />
            <Input size="large" placeholder="Большой input" />
        </div>
    )
}

export const WithValidation: Story = {
    render: () => {
        const [value, setValue] = useState('')
        const error = value.length > 0 && value.length < 50 ? 'Значение должно быть не более 50 символов' : ''

        return (
            <div style={{ maxWidth: '300px'}}>
                <Input
                    value={value}
                    onChange={setValue}
                    placeholder="Введите текст..."
                    error={error}
                />
            </div>
        )
}
}

export const DifferentTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
            <Input 
                type="text" 
                label="Текст" 
                placeholder="Введите текст" 
            />
            <Input 
                type="email" 
                label="Email" 
                placeholder="example@mail.com" 
            />
            <Input 
                type="password" 
                label="Пароль" 
                placeholder="••••••••" 
            />
            <Input 
                type="number" 
                label="Возраст" 
                placeholder="18" 
            />
            <Input 
                type="tel" 
                label="Телефон" 
                placeholder="+7 (999) 123-45-67" 
            />
        </div>
    )
}

export const TodoAppExample: Story = {
    render: () => {
        const [task, setTask] = useState('')
        
        
        return (
            <div style={{ maxWidth: '600px' }}>
                <h3>Форма добавления задачи:</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                        <Input
                            placeholder="Введите новую задачу..."
                            value={task}
                            onChange={setTask}
                        />
                    </div>
                    <button 
                        style={{ 
                            padding: '0.8em 1.5em',
                            background: 'linear-gradient(135deg, #646cff 0%, #535bf2 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Добавить
                    </button>
                </div>
            </div>
        )
    }
}