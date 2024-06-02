import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    error: {
      control: {
        type: 'text',
      },
      description: 'Error message to display',
    },
    warning: {
      control: {
        type: 'text',
      },
      description: 'Warning message to display',
    },
    success: {
      control: {
        type: 'text',
      },
      description: 'Success message to display',
    },
    customClass: {
      control: {
        type: 'text',
      },
      description: 'Custom class to apply',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: (args) => <TextArea {...args} />,
  args: {
    error: '',
    warning: '',
    success: '',
    customClass: '',
  },
};

export const Error: Story = {
  render: (args) => <TextArea {...args} />,
  args: {
    error: 'Error message',
    warning: '',
    success: '',
    customClass: '',
  },
};

export const Warning: Story = {
  render: (args) => <TextArea {...args} />,
  args: {
    error: '',
    warning: 'Warning message',
    success: '',
    customClass: '',
  },
};

export const Success: Story = {
  render: (args) => <TextArea {...args} />,
  args: {
    error: '',
    warning: '',
    success: 'Success message',
    customClass: '',
  },
};
