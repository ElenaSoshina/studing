import type { Meta, StoryObj } from '@storybook/react';
import  LocaleSwitcher from "./LocaleSwitcher";
import type { LocaleOption } from "./LocaleSwitcher";
import React, { useState } from 'react';

const meta: Meta<typeof LocaleSwitcher> = {
    title: 'UI/LocaleSwitcher',
    component: LocaleSwitcher,
}

export default meta

type Story = StoryObj<typeof LocaleSwitcher>

const options: LocaleOption[] = [
    {
        label: 'RU',
        value: 'ru-RU'
    },
    {
        label: 'EN',
        value: 'en-US'
    }
]

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<string>('ru-RU')

        return (
            <LocaleSwitcher
                value={value}
                options={options}
                onChange={setValue}
            />
        )
    }
}

export const WithEnSelected: Story = {
    args: {
        value: 'en-US',
        options,
        onChange: () => {}
    }
}
