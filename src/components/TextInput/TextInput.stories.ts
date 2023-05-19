import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
  },
};

export const WithHelper: Story = {
  args: {
    placeholder: 'Placeholder',
    helperText: 'Helper text',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: 'Helper text',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: 'Helper text',
    error: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: 'Helper text',
    leftIcon: 'search',
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: 'Helper text',
    rightIcon: 'arrowRight',
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: 'Helper text',
    leftIcon: 'search',
    rightIcon: 'arrowRight',
  },
};
