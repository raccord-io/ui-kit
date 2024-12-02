import type { Meta, StoryObj } from '@storybook/react';

import { Password } from './Password';

const meta = {
  title: 'Components/Password',
  component: Password,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'radio',
      options: ['xs', 'sm', 'default', 'lg', '2xl'],
    },
  },
  args: {
    inputSize: 'default',
  },
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your password',
  },
};
