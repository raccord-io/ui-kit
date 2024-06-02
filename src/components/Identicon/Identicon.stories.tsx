import type { Meta, StoryObj } from '@storybook/react';
import { Identicon } from './Identicon';

const meta: Meta<typeof Identicon> = {
  title: 'Components/Identicon',
  component: Identicon,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    username: {
      control: 'text',
      description: 'Username to generate the Identicon',
      defaultValue: 'testuser',
    },
    size: {
      control: 'number',
      description: 'Size of the Identicon',
      defaultValue: 40,
    },
    customClass: {
      control: 'text',
      description: 'Additional custom CSS classes for styling',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Identicon>;

export const _Identicon: Story = {
  render: (args) => <Identicon {...args} />,
  args: {
    username: 'test',
    size: 40,
    customClass: '',
  },
};
