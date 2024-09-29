import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
    className: {
      control: 'text',
      description: 'Additional custom CSS classes for styling',
      defaultValue: '',
    },
    onClickIcon: {
      action: 'clicked',
      description: 'Callback function for when the icon is clicked',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
      defaultValue: 'Enter text...',
    },
    value: {
      control: 'text',
      description: 'Value of the input field',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: 'Enter text...',
    value: '',
    className: '',
  },
};

export const Error: Story = {
  render: (args) => <Input {...args} />,
  args: {
    error: 'This is an error message',
    placeholder: 'Enter text...',
    value: '',
    className: '',
  },
};

export const Warning: Story = {
  render: (args) => <Input {...args} />,
  args: {
    warning: 'This is a warning message',
    placeholder: 'Enter text...',
    value: '',
    className: '',
  },
};

export const Success: Story = {
  render: (args) => <Input {...args} />,
  args: {
    success: 'This is a success message',
    placeholder: 'Enter text...',
    value: '',
    className: '',
  },
};
