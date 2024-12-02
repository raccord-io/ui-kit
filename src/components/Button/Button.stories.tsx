import type { Meta, StoryObj } from '@storybook/react';
import { ChevronLeft, Mail, Loader2 } from 'lucide-react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      description: 'Button variant',
      options: [
        'primary',
        'secondary',
        'secondary-color',
        'link',
        'danger-primary',
        'danger-secondary',
      ],
    },
    model: {
      control: 'radio',
      description: 'Button model',
      options: ['flat', 'outline'],
    },
    size: {
      control: 'select',
      description: 'Button size',
      options: ['default', 'sm', 'lg', 'xl', '2xl'],
    },
    disabled: {
      control: 'boolean',
      description: 'Button disabled state',
    },
  },
  args: {
    variant: 'primary',
    size: 'default',
    model: 'flat',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Default',
  },
};

export const PrimaryWithOutline: Story = {
  args: {
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const SecondaryWithOutline: Story = {
  args: {
    children: 'Secondary with Outline',
    variant: 'secondary',
    model: 'outline',
  },
};

export const SecondaryColor: Story = {
  args: {
    children: 'Secondary Color',
    variant: 'secondary-color',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const Icon: Story = {
  args: {
    children: <ChevronLeft strokeWidth={2} className="w-4 h-4" />,
    variant: 'secondary',
    model: 'outline',
    size: 'icon',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail strokeWidth={2} /> Login with Email
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 strokeWidth={2} className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>
    ),
    disabled: true,
  },
};

export const PrimaryDanger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger-primary',
  },
};

export const SecondaryDanger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger-secondary',
  },
};

export const AsChild: Story = {
  args: {
    children: <a href="">Login</a>,
    asChild: true,
  },
};
