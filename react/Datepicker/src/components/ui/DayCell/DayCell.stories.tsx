import type { Meta, StoryObj } from '@storybook/react';
import DayCell from './DayCell';

const meta: Meta<typeof DayCell> = {
  title: 'UI/DayCell',
  component: DayCell,
  argTypes: {
    onClick: { action: 'click' },
  },
};

export default meta;

type Story = StoryObj<typeof DayCell>;

export const Default: Story = {
  args: {
    day: 14,
    iso: '2025-12-14',
  },
};

export const Today: Story = {
  args: {
    day: 14,
    iso: '2025-12-14',
    isToday: true,
  },
};

export const Selected: Story = {
  args: {
    day: 14,
    iso: '2025-12-14',
    isSelected: true,
  },
};

export const OutsideMonth: Story = {
  args: {
    day: 30,
    iso: '2025-11-30',
    isOutsideMonth: true,
  },
};

export const Disabled: Story = {
  args: {
    day: 1,
    iso: '2025-12-01',
    isDisabled: true,
  },
};