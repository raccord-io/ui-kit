import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from './ScrollArea';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v0.1.0-beta-raccord.${a.length - i}`,
);

export const Default: Story = {
  render: (args) => (
    <ScrollArea
      className="h-72 w-48 rounded-md border border-border-secondary"
      {...args}
    >
      <div className="p-4">
        <h4 className="mb-4 text-sm text-text-primary font-medium leading-none">
          Tags
        </h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm text-text-primary">
              {tag}
            </div>
          </>
        ))}
      </div>
    </ScrollArea>
  ),
  args: {},
};
