import { Meta, StoryObj } from '@storybook/react';

import { Toggle, ToggleProps } from './Toggle';

const meta: Meta<ToggleProps> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    tShirtSize: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
      description: 'Size of the toggle',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is checked or not',
    },
  },
};

export default meta;

type Story = StoryObj<ToggleProps>;

export const _Toggle: Story = {
  render: (args) => <Toggle {...args} />,
  args: {
    tShirtSize: 'md',
    checked: false,
  },
};
