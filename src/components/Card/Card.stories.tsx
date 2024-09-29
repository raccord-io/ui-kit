import type { Meta, StoryObj } from '@storybook/react';

import { Toast, toast } from '../Toast';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    enableBorder: {
      control: 'boolean',
      description: 'Enable or disable border',
      defaultValue: true,
    },
    children: {
      control: 'ReactNode',
      description: 'Content of the card',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const _Card: Story = {
  render: (args) => (
    <>
      <Card {...args} onClick={() => toast.success('You clicked me!')} />
      <Toast />
    </>
  ),
  args: {
    enableBorder: true,
    children: 'Click me!',
  },
};
