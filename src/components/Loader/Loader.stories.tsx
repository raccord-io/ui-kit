import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    size: {
      control: 'number',
      description: 'Size of the loader',
      defaultValue: 24,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const _Loader: Story = {
  render: (args) => <Loader {...args} />,
  args: {
    size: 24,
  },
};
