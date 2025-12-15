import type { Meta, StoryObj } from '@storybook/react';
import WeekdaysHeader from './WeekdaysHeader';

const meta: Meta<typeof WeekdaysHeader> = {
  title: 'UI/WeekdaysHeader',
  component: WeekdaysHeader,
};

export default meta;

type Story = StoryObj<typeof WeekdaysHeader>;

export const RuMondayShort: Story = {
  args: { locale: 'ru-RU', weekStartsOn: 1, format: 'short' },
};

export const EnSundayShort: Story = {
  args: { locale: 'en-US', weekStartsOn: 0, format: 'short' },
};

export const RuMondayNarrow: Story = {
  args: { locale: 'ru-RU', weekStartsOn: 1, format: 'narrow' },
};