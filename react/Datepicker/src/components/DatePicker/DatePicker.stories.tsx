import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text' },
    locale: { control: 'text' },
    weekStartsOn: { control: { type: 'inline-radio' }, options: [0, 1] },
    onChange: { action: 'change' },
    showLocaleSwitcher: { control: 'boolean' },
    defaultLocale: { control: 'text' },
    onLocaleChange: { action: 'localeChange' },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const DefaultToday: Story = {
  args: {
    locale: 'ru-RU',
    weekStartsOn: 1,
  },
};

export const ControlledLocaleSwitcher: Story = {
  render: () => {
    const [locale, setLocale] = useState<'ru-RU' | 'en-US'>('ru-RU');
    const [value, setValue] = useState('2025-12-14');

    return (
      <DatePicker
        showLocaleSwitcher
        value={value}
        locale={locale}
        onChange={setValue}
        onLocaleChange={(next) => {
          if (next === 'ru-RU' || next === 'en-US') setLocale(next);
        }}
      />
    );
  },
};

export const WithInternalLocaleSwitcher: Story = {
  args: {
    showLocaleSwitcher: true,
    defaultLocale: 'ru-RU',
  },
};