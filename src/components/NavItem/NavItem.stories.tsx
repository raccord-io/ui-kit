import type { Meta, StoryObj } from '@storybook/react';
import { ChartNoAxesColumn } from 'lucide-react';

import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Components/NavItem',
  component: NavItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NavItem>;

export const _NavItem: Story = {
  render: () => (
    <div className="w-72">
      <NavItem
        label="Organisations"
        preIcon={<ChartNoAxesColumn className="w-6 h-6" strokeWidth={2} />}
        onClick={() => console.log('clicked')}
      >
        <NavItem label="Raccord" />
        <NavItem label="Epitech" />
        <NavItem label="Studio 17" />
      </NavItem>
    </div>
  ),
};
