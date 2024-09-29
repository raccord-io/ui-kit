import type { Meta, StoryObj } from '@storybook/react';

import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    steps: {
      control: {
        type: 'array',
      },
      description: 'Array of step labels',
    },
    step: {
      control: {
        type: 'number',
      },
      description: 'Current step index',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const _Stepper: Story = {
  render: (args) => <Stepper {...args} />,
  args: {
    steps: ['Step 1', 'Step 2', 'Step 3'],
    step: 0,
  },
};
