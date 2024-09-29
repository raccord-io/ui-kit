import type { Meta, StoryObj } from '@storybook/react';

import { ThemeMode } from './ThemeMode';

const meta: Meta<typeof ThemeMode> = {
  title: 'Components/ThemeMode',
  component: ThemeMode,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onSetTheme: {
      action: 'onSetTheme',
      description: 'Callback function to handle theme change',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ThemeMode>;

export const _ThemeMode: Story = {
  render: (args) => <ThemeMode {...args} />,
  args: {},
};
