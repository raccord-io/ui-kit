import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'gray',
        'purple',
        'green',
        'orange',
        'blue',
        'yellow',
        'red',
        'dark-blue',
        'neutral',
      ],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    color: 'neutral',
    size: 'sm',
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    color: 'neutral',
    onClick: () => console.log('clicked'),
    onClickCross: () => console.log('clicked cross'),
  },
};

export const Blue: Story = {
  args: {
    color: 'blue',
  },
};

export const Green: Story = {
  args: {
    color: 'green',
  },
};

export const Red: Story = {
  args: {
    color: 'red',
  },
};

export const DarkBlue: Story = {
  args: {
    color: 'dark-blue',
  },
};

export const Purple: Story = {
  args: {
    color: 'purple',
  },
};

export const Orange: Story = {
  args: {
    color: 'orange',
  },
};

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
};

export const Custom: Story = {
  args: {
    color: '#8A00A9',
  },
};

// export const _Tag: Story = {
//   render: (args) => (
//     <>
//       <Tag {...args} />
//       <br />
//       <Tag
//         content="tag custom"
//         color="#008B07"
//         onClickCross={() => console.log('clicked')}
//       />
//     </>
//   ),
//   args: {
//     color: 'green',
//     content: 'Tag',
//   },
// };
