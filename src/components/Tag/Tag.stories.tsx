import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    color: {
      control: {
        control: { type: 'radio' },
        options: ['neutral', 'blue', 'green', 'red'],
      },
      description: 'Tag color',
    },
    content: {
      control: {
        type: 'text',
      },
      description: 'Tag content',
    },
    customClass: {
      control: {
        type: 'text',
      },
      description: 'Custom class',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const _Tag: Story = {
  render: (args) => <Tag {...args} />,
  args: {
    color: 'green',
    content: 'Tag',
  },
};
