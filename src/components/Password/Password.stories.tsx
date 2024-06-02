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
  },
};

export default meta;

type Story = StoryObj<typeof Password>;

export const Default: Story = {
  render: (args) => <Password {...args} />,
  args: {
    error: '',
    warning: '',
  },
};

export const WithError: Story = {
  render: (args) => <Password {...args} />,
  args: {
    error: 'This is an error message',
    warning: '',
  },
};

export const WithWarning: Story = {
  render: (args) => <Password {...args} />,
  args: {
    error: '',
    warning: 'This is a warning message',
  },
};
