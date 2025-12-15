import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CalendarGrid, { type CalendarDay } from './CalendarGrid';

function pad2(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

function iso(d: Date) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function makeMock42Days(): CalendarDay[] {
  // пример: декабрь 2025, но сетка 6×7 включает и соседние дни
  const start = new Date(2025, 11, 1); // 2025-12-01
  const startDay = start.getDay(); // 0..6
  const weekStartsOn: 0 | 1 = 1;

  const diff = (startDay - weekStartsOn + 7) % 7;
  const firstGridDay = new Date(2025, 11, 1 - diff);

  const res: CalendarDay[] = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(firstGridDay);
    d.setDate(firstGridDay.getDate() + i);

    const outside = d.getMonth() !== 11;
    const value = iso(d);

    res.push({
      day: d.getDate(),
      iso: value,
      isOutsideMonth: outside,
      isToday: value === '2025-12-14',
      isSelected: value === '2025-12-20',
    });
  }
  return res;
}

const meta: Meta<typeof CalendarGrid> = {
  title: 'UI/CalendarGrid',
  component: CalendarGrid,
  argTypes: {
    onDayClick: { action: 'dayClick' },
  },
};

export default meta;

type Story = StoryObj<typeof CalendarGrid>;

export const Default: Story = {
  args: {
    days: makeMock42Days(),
  },
};