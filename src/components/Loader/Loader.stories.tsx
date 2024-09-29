import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    type: {
      control: {
        control: { type: 'radio' },
        options: ['default', 'raccord'],
      },
      description: 'Type of the loader',
      defaultValue: 'default',
    },
    size: {
      control: 'number',
      description: 'Size of the loader',
      defaultValue: 24,
    },
    customClass: {
      control: 'text',
      description: 'Additional custom CSS classes for styling',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const _Loader: Story = {
  render: (args) => <Loader {...args} />,
  args: {
    type: 'default',
    size: 24,
    customClass: '',
  },
};
