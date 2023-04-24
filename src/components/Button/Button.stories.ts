import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    priority: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    priority: 'secondary',
    children: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    priority: 'tertiary',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    priority: 'primary',
    children: 'Button',
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    priority: 'secondary',
    children: 'Button',
    disabled: true,
  },
};

export const TertiaryDisabled: Story = {
  args: {
    priority: 'tertiary',
    children: 'Button',
    disabled: true,
  },
};

export const Negative: Story = {
  args: {
    priority: 'primary',
    children: 'Button',
    negative: true,
  },
};

export const SecondaryNegative: Story = {
  args: {
    priority: 'secondary',
    children: 'Button',
    negative: true,
  },
};

export const NegativeDisabled: Story = {
  args: {
    priority: 'primary',
    children: 'Button',
    negative: true,
    disabled: true,
  },
};

export const SecondaryNegativeDisabled: Story = {
  args: {
    priority: 'secondary',
    children: 'Button',
    negative: true,
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    priority: 'primary',
    children: 'Button',
    leftIcon: 'home',
  },
};

export const WithRightIcon: Story = {
  args: {
    priority: 'primary',
    children: 'Button',
    rightIcon: 'home',
  },
};

export const WithJustIcon: Story = {
  args: {
    priority: 'primary',
    rightIcon: 'home',
  },
};
