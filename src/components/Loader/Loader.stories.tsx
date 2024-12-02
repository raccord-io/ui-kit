import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
    },
    type: {
      control: 'select',
      options: ['circle', 'raccord'],
    },
  },
  args: {
    size: 50,
    type: 'circle',
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {},
};
