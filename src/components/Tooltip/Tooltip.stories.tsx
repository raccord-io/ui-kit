import { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';

const meta: Meta<TooltipProps> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content',
    },
    placement: {
      control: {
        type: 'select',
        options: [
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-start',
          'bottom',
          'bottom-end',
          'left-start',
          'left',
          'left-end',
        ],
      },
      description: 'Tooltip placement',
    },
    customClass: {
      control: 'text',
      description: 'Custom class for styling',
    },
  },
};

export default meta;

type Story = StoryObj<TooltipProps>;

export const _Tooltip: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <button type="button">Hover me</button>
    </Tooltip>
  ),
  args: {
    content: 'Tooltip content',
    placement: 'top',
    customClass: '',
  },
};
