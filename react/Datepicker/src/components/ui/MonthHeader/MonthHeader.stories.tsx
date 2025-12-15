import type { Meta, StoryObj } from '@storybook/react';
import MonthHeader from './MonthHeader';

const meta: Meta<typeof MonthHeader> = {
    title: 'UI/MonthHeader',
    component: MonthHeader,
    argTypes: {
        onPrev: {action: 'prev'},
        onNext: {action: 'next'}
    }
}

export default meta
type Story = StoryObj<typeof MonthHeader>

export const Default: Story = {
    args: {
        label: 'декабрь 2025'
    }
}