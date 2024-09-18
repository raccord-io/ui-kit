import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v0.1.0-beta-raccord.${a.length - i}`,
);

export const _ScrollArea: Story = {
  render: (args) => (
    <ScrollArea className="h-72 w-48 rounded-md border" {...args}>
      <div className="p-4">
        <h4 className="mb-4 text-sm text-f-primary font-medium leading-none">
          Tags
        </h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm text-f-primary">
              {tag}
            </div>
          </>
        ))}
      </div>
    </ScrollArea>
  ),
  args: {},
};
