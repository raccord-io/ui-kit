import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';
import { Button } from '../Button';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    tabsConfig: {
      control: {
        type: 'array',
      },
      description: 'Array of tab configurations',
    },
  },
};

const tabsConfig = [
  {
    label: 'Tab 1',
    content: <Button> Tab 1 component </Button>,
    onClickTab: () => console.log('Hello'),
  },
  {
    label: 'Tab 2',
    content: <Button> Tab 2 component </Button>,
  },
];

export default meta;

type Story = StoryObj<typeof Tabs>;

export const _Tabs: Story = {
  render: (args) => <Tabs {...args} />,
  args: {
    tabsConfig,
    defaultIndex: 1,
  },
};
