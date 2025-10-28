import type { Meta, StoryObj } from '@storybook/react-vite'
import Checkbox from './Checkbox'
import { useState } from 'react'

const meta: Meta<typeof Checkbox> = {
    title: 'UI/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Размер чекбокса'
        },
        disabled: {
            control: 'boolean',
            description: 'Отключенное состояние'
        },
        checked: {
            control: 'boolean',
            description: 'Отмеченное состояние'
        },
        label: {
            control: 'text',
            description: 'Текст label'
        }
    }
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    args: {
        checked: false
    }
}

export const Checked: Story = {
    args: {
        checked: true
    }
}

export const WithLabel: Story = {
    args: {
        label: 'Согласен с условиями пользования',
        checked: false
    }
}

export const CheckedWithLabel: Story = {
    args: {
        label: 'Согласен с условиями пользования',
        checked: true
    }
}

export const Disabled: Story = {
    args: {
        disabled: true,
        label: 'Недоступно'
    }
}

export const DisabledChecked: Story = {
    args: {
        disabled: true,
        checked: true,
        label: 'Выбрано (недоступно)'
    }
}

export const Small: Story = {
    args: {
        size: 'small',
        checked: true,
        label: 'Маленький'
    }
}

export const Medium: Story = {
    args: {
        size: 'medium',
        checked: true,
        label: 'Средний'
    }
}

export const Large: Story = {
    args: {
        size: 'large',
        checked: true,
        label: 'Большой'
    }
}

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox size="small" checked label="Small checkbox" />
            <Checkbox size="medium" checked label="Medium checkbox" />
            <Checkbox size="large" checked label="Large checkbox" />
        </div>
    )
}

export const CheckboxGroup: Story = {
    render: () => {
        const [options, setOptions] = useState({
            option1: false,
            option2: true,
            option3: false,
            option4: true
        })
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3>Выберите опции:</h3>
                <Checkbox
                    checked={options.option1}
                    onChange={(checked) => setOptions({...options, option1: checked})}
                    label="Опция 1"
                />
                <Checkbox
                    checked={options.option2}
                    onChange={(checked) => setOptions({...options, option2: checked})}
                    label="Опция 2"
                />
                <Checkbox
                    checked={options.option3}
                    onChange={(checked) => setOptions({...options, option3: checked})}
                    label="Опция 3"
                />
                <Checkbox
                    checked={options.option4}
                    onChange={(checked) => setOptions({...options, option4: checked})}
                    label="Опция 4"
                />
            </div>
        )
    }
}

export const SelectAllExample: Story = {
    render: () => {
        const [tasks, setTasks] = useState([
            { id: 1, text: 'Задача 1', checked: false },
            { id: 2, text: 'Задача 2', checked: true },
            { id: 3, text: 'Задача 3', checked: false }
        ])
        
        const allChecked = tasks.every(t => t.checked)
        
        const handleSelectAll = (checked: boolean) => {
            setTasks(tasks.map(t => ({ ...t, checked })))
        }
        
        const handleToggle = (id: number, checked: boolean) => {
            setTasks(tasks.map(t => t.id === id ? { ...t, checked } : t))
        }
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Checkbox
                    checked={allChecked}
                    onChange={handleSelectAll}
                    label="Выбрать все"
                />
                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #ddd' }} />
                {tasks.map(task => (
                    <Checkbox
                        key={task.id}
                        checked={task.checked}
                        onChange={(checked) => handleToggle(task.id, checked)}
                        label={task.text}
                    />
                ))}
            </div>
        )
    }
}

export const TodoAppExample: Story = {
    render: () => {
        const [todos, setTodos] = useState([
            { id: 1, text: 'Купить молоко', selected: false },
            { id: 2, text: 'Сделать зарядку', selected: true },
            { id: 3, text: 'Прочитать книгу', selected: false }
        ])
        
        return (
            <div style={{ maxWidth: '600px' }}>
                <h3>Список задач:</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {todos.map(todo => (
                        <div 
                            key={todo.id}
                            style={{
                                padding: '12px',
                                background: '#f5f5f5',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}
                        >
                            <Checkbox
                                checked={todo.selected}
                                onChange={(checked) => 
                                    setTodos(todos.map(t => 
                                        t.id === todo.id ? { ...t, selected: checked } : t
                                    ))
                                }
                            />
                            <span>{todo.text}</span>
                        </div>
                    ))}
                </div>
                <p style={{ marginTop: '16px', color: '#666' }}>
                    Выбрано: <strong>{todos.filter(t => t.selected).length}</strong> из {todos.length}
                </p>
            </div>
        )
    }
}
