import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    pages: {
      control: 'number',
      description: 'Total number of pages',
      defaultValue: 10,
    },
    currentPage: {
      control: 'number',
      description: 'Current active page',
      defaultValue: 1,
    },
    customClass: {
      control: 'text',
      description: 'Additional custom CSS classes for styling',
      defaultValue: '',
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback function for when the page is changed',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const _Pagination: Story = {
  render: (args) => <Pagination {...args} />,
  args: {
    pages: 10,
    currentPage: 1,
    customClass: '',
    onPageChange: () => {},
  },
};
