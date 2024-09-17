import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryLogo, SecondaryLogo } from './Raccord';

const meta: Meta<typeof PrimaryLogo> = {
  title: 'Icons/Raccord',
  component: PrimaryLogo || SecondaryLogo,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['theme-dark', 'theme-light'],
      description: 'Theme of the logo',
      defaultValue: 'theme-light',
    },
    size: {
      control: 'number',
      description: 'size of the logo',
      defaultValue: 495,
    },
  },
};

export default meta;

export const _RaccordPrimaryLogo: StoryObj = {
  render: (args) => <PrimaryLogo {...args} />,
  args: {
    theme: 'theme-dark',
    size: 495,
  },
};

export const _RaccordSecondaryLogo: StoryObj = {
  render: (args) => <SecondaryLogo {...args} />,
  args: {
    theme: 'theme-dark',
    size: 295,
  },
};
