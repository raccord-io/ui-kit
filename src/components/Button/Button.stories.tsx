import { Loader } from '../Loader';
import { Button } from './Button';
import { FiCheck, FiFile } from 'react-icons/fi';
import type { Meta, StoryObj } from '@storybook/react';

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
    pressed: {
      control: 'boolean',
      description: 'Button pressed',
      defaultValue: false,
    },
    variant: {
      control: 'radio',
      description: 'Button variant',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'danger', 'icon'],
    },
    customClass: {
      control: 'text',
      description: 'Custom CSS classes',
      defaultValue: '',
    },
    hoverText: {
      control: 'text',
      description: 'Text to be displayed on hover',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const args = {
  onClick: () => {
    console.log('clicked');
  },
  preIcon: <FiCheck />,
  posIcon: <FiCheck />,
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
      <Button preIcon={<FiFile />} customClass="w-40">
        <div className="flex items-center">File</div>
      </Button>
      <br />
      <br />
      <Button customClass="w-40">
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
      <Button variant="secondary" preIcon={<FiFile />} customClass="w-40">
        <div className="flex items-center">File</div>
      </Button>
      <br />
      <br />
      <Button variant="secondary" customClass="w-40">
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
        <FiFile />
      </Button>
      &nbsp;
      <Button variant="icon" disabled>
        <FiFile />
      </Button>
      <br />
      <br />
      <Button variant="icon" model="border">
        <FiFile />
      </Button>
      &nbsp;
      <Button variant="icon" model="border">
        <FiFile color={colorWarning} />
      </Button>
      &nbsp;
      <Button hoverText="this is a hovered icon" variant="icon" model="border">
        <FiFile color={colorWarning} />
      </Button>
      <br />
      <br />
      <Button variant="icon" model="border" disabled>
        <FiFile />
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
