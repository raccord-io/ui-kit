import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryLogo, SecondaryLogo } from './Raccord';

const meta = {
  title: 'Icons/Raccord',
  component: PrimaryLogo || SecondaryLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Theme of the logo',
      defaultValue: 'dark',
    },
    size: {
      control: 'number',
      description: 'Size of the logo',
      defaultValue: 495,
    },
  },
  args: {
    theme: 'dark',
    size: 495,
  },
} satisfies Meta<typeof PrimaryLogo | typeof SecondaryLogo>;

export default meta;

export const Primary: StoryObj = {};

export const Secondary: StoryObj = {
  render: (args) => <SecondaryLogo {...args} />,
  args: {
    size: 295,
  },
};
