import type { Meta, StoryObj } from '@storybook/react';
import {
  PopupModal,
  PopupModalContent,
  PopupModalHeader,
  PopupModalFooter,
} from './PopupModal';

const meta: Meta<typeof PopupModal> = {
  title: 'Components/PopupModal',
  component: PopupModal,
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <div className="h-[450px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['hidden', 'displayed'],
      },
      description: 'Current status of the modal',
      defaultValue: 'hidden',
    },
    fullMode: {
      control: 'boolean',
      description: 'Whether the modal is in full screen mode',
      defaultValue: false,
    },
    customClass: {
      control: 'text',
      description: 'Additional custom CSS class for the modal container',
      defaultValue: '',
    },
    customClassNested: {
      control: 'text',
      description: 'Additional custom CSS class for the nested modal content',
      defaultValue: '',
    },
  },
};

const args = {
  onOpen: () => {
    console.log('event on open');
  },
  onClose: () => {
    console.log('event on close');
  },
  customClass: '',
  customClassNested: '',
};

export default meta;

type Story = StoryObj<typeof PopupModal>;

export const _Regular: Story = {
  render: (args) => (
    <PopupModal {...args}>
      <PopupModalHeader>
        <label className="text-f-primary">The title</label>
      </PopupModalHeader>
      <PopupModalContent>
        <label className="text-f-primary">any content</label>
      </PopupModalContent>
      <PopupModalFooter>
        <label className="text-f-primary">that's footer</label>
      </PopupModalFooter>
    </PopupModal>
  ),
  args: {
    status: 'displayed',
    fullMode: false,
    ...args,
  },
};

export const _NoHeader: Story = {
  render: (args) => (
    <PopupModal {...args}>
      <PopupModalContent>
        <label className="text-f-primary">any content</label>
      </PopupModalContent>
      <PopupModalFooter>
        <label className="text-f-primary">that's footer</label>
      </PopupModalFooter>
    </PopupModal>
  ),
  args: {
    status: 'displayed',
    fullMode: false,
    ...args,
  },
};

export const _NoFooter: Story = {
  render: (args) => (
    <PopupModal {...args}>
      <PopupModalHeader>
        <label className="text-f-primary">The title</label>
      </PopupModalHeader>
      <PopupModalContent>
        <label className="text-f-primary">any content</label>
      </PopupModalContent>
    </PopupModal>
  ),
  args: {
    status: 'displayed',
    fullMode: false,
    ...args,
  },
};

export const _FullMode: Story = {
  render: (args) => (
    <PopupModal {...args}>
      <PopupModalHeader>
        <label className="text-f-primary">The title</label>
      </PopupModalHeader>
      <PopupModalContent>
        <label className="text-f-primary">any content</label>
      </PopupModalContent>
      <PopupModalFooter>
        <label className="text-f-primary">that's footer</label>
      </PopupModalFooter>
    </PopupModal>
  ),
  args: {
    status: 'displayed',
    fullMode: true,
    ...args,
  },
};
