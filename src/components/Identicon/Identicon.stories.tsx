import type { Meta, StoryObj } from '@storybook/react';

import { Identicon } from './Identicon';

const meta = {
  title: 'Components/Identicon',
  component: Identicon,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    username: {
      control: 'text',
      description: 'Username to generate the Identicon',
      defaultValue: 'testuser',
    },
    size: {
      control: 'number',
      description: 'Size of the Identicon',
      defaultValue: 40,
    },
  },
} satisfies Meta<typeof Identicon>;

export default meta;

type Story = StoryObj<typeof Identicon>;

export const Default: Story = {
  args: {
    username: 'test',
    size: 40,
  },
};
