import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
} 

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Save',
        variant: 'primary'
    }
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        variant: 'secondary'
    }
}

export const Ghost: Story = {
    args: {
        children: '←',
        variant: 'ghost',
        size: 'sm',
        ariaLabel: 'Prev'
    }
}

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true
    }
}