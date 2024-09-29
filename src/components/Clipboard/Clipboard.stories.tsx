import type { Meta, StoryObj } from '@storybook/react';

import { Clipboard } from './Clipboard';

const meta: Meta<typeof Clipboard> = {
  title: 'Components/Clipboard',
  component: Clipboard,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    rawContent: {
      control: 'text',
      description: 'The actual content to be copied to the clipboard',
      defaultValue: 'this is the content',
    },
    displayedContent: {
      control: 'text',
      description: 'The content displayed to the user',
      defaultValue: 'formatted content',
    },
    error: {
      control: 'text',
      description: 'The error message displayed if copying fails',
      defaultValue: 'Oupps!',
    },
    success: {
      control: 'text',
      description: 'The success message displayed if copying succeeds',
      defaultValue: 'Copied!',
    },
    customClass: {
      control: 'text',
      description: 'Additional custom CSS classes for styling',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Clipboard>;

export const _Clipboard: Story = {
  render: (args) => <Clipboard {...args} />,
  args: {
    rawContent: 'this is the content',
    displayedContent: 'formatted content',
    error: 'Oupps!',
    success: 'Copied!',
    customClass: '',
  },
};
