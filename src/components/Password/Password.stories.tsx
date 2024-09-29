import type { Meta, StoryObj } from '@storybook/react';

import { Password } from './Password';

const meta: Meta<typeof Password> = {
  title: 'Components/Password',
  component: Password,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    error: {
      control: 'text',
      description: 'Error message to display',
      defaultValue: '',
    },
    warning: {
      control: 'text',
      description: 'Warning message to display',
      defaultValue: '',
    },
    success: {
      control: 'text',
      description: 'Success message to display',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Password>;

export const Default: Story = {
  render: (args) => <Password {...args} placeholder="default" />,
  args: {
    error: '',
    warning: '',
    success: '',
  },
};

export const WithError: Story = {
  render: (args) => <Password {...args} placeholder="error" />,
  args: {
    error: 'This is an error message',
    warning: '',
    success: '',
  },
};

export const WithWarning: Story = {
  render: (args) => <Password {...args} placeholder="warning" />,
  args: {
    error: '',
    warning: 'This is a warning message',
    success: '',
  },
};

export const WithSuccess: Story = {
  render: (args) => <Password {...args} placeholder="success" />,
  args: {
    error: '',
    warning: '',
    success: 'This is a success message',
  },
};
