import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    color: {
      control: 'text',
      description: 'Color of the divider',
      defaultValue: 'black',
    },
    size: {
      control: 'text',
      description: 'Size of the divider',
      defaultValue: '1',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
      defaultValue: 'horizontal',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const _Divider: Story = {
  render: (args) => <Divider {...args} />,
  args: {
    color: 'black',
    size: '1',
    orientation: 'horizontal',
  },
};
