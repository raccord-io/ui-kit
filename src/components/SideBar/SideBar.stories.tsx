import type { Meta, StoryObj } from '@storybook/react';
import { SideBar, ItemProps } from './SideBar';
import { Tag } from '../Tag';

const meta: Meta<typeof SideBar> = {
  title: 'Components/SideBar',
  component: SideBar,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    items: {
      control: {
        type: 'object',
      },
      description: 'Array of items to display in the sidebar',
    },
  },
};

const items: ItemProps[] = [
  {
    mode: 'main',
    label: '1. Ext. Hôpital. Jour',
    onClickInfo: () => console.log('clicked 1'),
    children: [
      {
        label: 'Lieux',
      },
      {
        label: 'Personnages',
        children: [
          <Tag color="neutral" content="test1" />,
          <Tag color="blue" content="test2" />,
          <Tag color="red" content="test3" />,
          <Tag color="green" content="test4" />,
        ],
      },
      {
        label: 'Accessoires',
      },
    ],
  },
  {
    mode: 'main',
    label: '2. Ext. Hôpital. Jour',
    onClickInfo: () => console.log('clicked 2'),
    children: [
      {
        label: 'Lieux',
      },
      {
        label: 'Personnages',
      },
      {
        label: 'Accessoires',
      },
    ],
  },
  {
    label: '3. Ext. Hôpital. Jour',
  },
];

export default meta;

type Story = StoryObj<typeof SideBar>;

export const _SideBar: Story = {
  render: (args) => (
    <div className="w-52">
      <SideBar {...args} />
    </div>
  ),
  args: {
    items,
  },
};
