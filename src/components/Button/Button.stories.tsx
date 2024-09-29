import type { Meta, StoryObj } from '@storybook/react';
import { Check, File } from 'lucide-react';

import { Loader } from '../Loader';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    preIcon: {
      control: 'object',
      description: 'Icon to be displayed before the text',
      defaultValue: null,
    },
    posIcon: {
      control: 'object',
      description: 'Icon to be displayed after the text',
      defaultValue: null,
    },
    model: {
      control: 'radio',
      description: 'Button model',
      defaultValue: 'single',
      options: ['single', 'border'],
    },
    variant: {
      control: 'radio',
      description: 'Button variant',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'danger', 'icon'],
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes',
      defaultValue: '',
    },
    // hoverText: {
    //   control: 'text',
    //   description: 'Text to be displayed on hover',
    //   defaultValue: '',
    // },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const args = {
  onClick: () => {
    console.log('clicked');
  },
  preIcon: <Check />,
  posIcon: <Check />,
};

export const _Primary: Story = {
  render: () => (
    <>
      <Button {...args}>Primary</Button>

      <br />
      <br />

      <Button {...args} disabled>
        Primary disabled
      </Button>
    </>
  ),
  args: {
    ...args,
  },
};

export const _PrimaryWithLabel: Story = {
  render: () => (
    <>
      <Button preIcon={<File />} className="w-40">
        <div className="flex items-center">File</div>
      </Button>
      <br />
      <br />
      <Button className="w-40">
        <div className="flex items-center">
          File
          <label className="text-tertiary text-xs flex ml-1 items-center">
            (small)
          </label>
        </div>
      </Button>
    </>
  ),
};

export const _Secondary: Story = {
  render: () => (
    <>
      <Button variant="secondary" {...args}>
        Secondary
      </Button>

      <br />
      <br />

      <Button variant="secondary" {...args} disabled>
        Secondary disabled
      </Button>

      <br />
      <br />
    </>
  ),
  args: {
    ...args,
  },
};

export const _SecondaryWithLabel: Story = {
  render: () => (
    <>
      <Button variant="secondary" preIcon={<File />} className="w-40">
        <div className="flex items-center">File</div>
      </Button>
      <br />
      <br />
      <Button variant="secondary" className="w-40">
        <div className="flex items-center">
          File
          <label className="text-c-pressed text-xs flex ml-1 items-center">
            (small)
          </label>
        </div>
      </Button>
    </>
  ),
};

export const _Danger: Story = {
  render: () => (
    <>
      <Button variant="danger" {...args}>
        Secondary
      </Button>

      <br />
      <br />

      <Button variant="danger" {...args} disabled>
        Secondary disabled
      </Button>

      <br />
      <br />
    </>
  ),
  args: {
    ...args,
  },
};

const colorWarning = '#FFA41D';

export const _Icon: Story = {
  render: () => (
    <>
      <Button variant="icon">
        <File />
      </Button>
      &nbsp;
      <Button variant="icon" disabled>
        <File />
      </Button>
      <br />
      <br />
      <Button variant="icon" model="border">
        <File />
      </Button>
      &nbsp;
      <Button variant="icon" model="border">
        <File color={colorWarning} />
      </Button>
      &nbsp;
      <br />
      <br />
      <Button variant="icon" model="border" disabled>
        <File />
      </Button>
    </>
  ),
};

export const _ButtonWithSpinner: Story = {
  render: () => (
    <Button disabled>
      <Loader /> Install
    </Button>
  ),
};
