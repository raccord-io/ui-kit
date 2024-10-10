import type { Meta, StoryObj } from '@storybook/react';
import { ChartNoAxesColumn } from 'lucide-react';

import { NavItem, NavItemProps } from './NavItem';

const meta: Meta<NavItemProps> = {
  title: 'Components/NavItem',
  component: NavItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Open state of the NavItem',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<NavItemProps>;

export const _NavItem: Story = {
  render: (args) => (
    <div className="w-72">
      <NavItem
        preIcon={<ChartNoAxesColumn className="w-6 h-6" strokeWidth={2} />}
        {...args}
      >
        <NavItem label="Raccord" />
        <NavItem label="Studio 17" />
        <NavItem label="Epitech" />
      </NavItem>
    </div>
  ),
  args: {
    label: 'Organisations',
    onClick: () => console.log('clicked'),
    open: false,
  },
};
