import { Toast, toast } from '../Toast';
import { Card } from './Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    bgColor: {
      control: 'text',
      description: 'Background color of the card',
      defaultValue: 'bg-white',
    },
    enableBorder: {
      control: 'boolean',
      description: 'Enable or disable border',
      defaultValue: true,
    },
    customClass: {
      control: 'text',
      description: 'Custom CSS classes',
      defaultValue: '',
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
    bgColor: 'bg-brand-green',
    enableBorder: true,
    customClass: 'hover:cursor-pointer',
    children: 'Click me!',
  },
};
