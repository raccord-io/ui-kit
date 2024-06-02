import type { Meta, StoryObj } from '@storybook/react';
import { DragDrop } from './DragDrop';

const meta: Meta<typeof DragDrop> = {
  title: 'Components/DragDrop',
  component: DragDrop,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the drag and drop area',
      defaultValue: 'Drop your file here',
    },
    allowed: {
      control: 'array',
      description: 'Array of allowed file extensions',
      defaultValue: ['jpeg', 'png'],
    },
    onFileLoaded: {
      action: 'fileLoaded',
      description: 'Callback function when a file is loaded',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DragDrop>;

export const _DragDrop: Story = {
  render: (args) => <DragDrop {...args} />,
  args: {
    placeholder: 'Drop your file here',
    allowed: ['jpeg', 'png'],
    onFileLoaded: (file) => console.log(file),
  },
};
