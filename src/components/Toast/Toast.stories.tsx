import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../';

import { Toast, toast } from './Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

// export const Default: Story = {
//   render: () => (
//     <>
//       <Button onClick={() => toast.success('Uuurraa! This is a success CSS')}>
//         Create Success Toast
//       </Button>
//       <Button
//         onClick={() => {
//           toast.error('Euhh! This is an error message!');
//         }}
//       >
//         Create Error Toast
//       </Button>
//       <Button
//         onClick={() => {
//           toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
//             loading: 'Chargement en cours...',
//             success: 'Succès',
//             error: 'Erreur',
//           });
//         }}
//       >
//         Create a Success Promise Toast
//       </Button>
//       <Button
//         onClick={() => {
//           toast.promise(
//             new Promise((_resolve, reject) => setTimeout(reject, 1000)),
//             {
//               loading: 'Chargement en cours...',
//               success: 'Succès',
//               error: 'Erreur',
//             },
//           );
//         }}
//       >
//         Create an Error Promise Toast
//       </Button>
//       <Button
//         onClick={() => {
//           toast('Hello World', { icon: '👏' });
//         }}
//       >
//         Custom Icon Toast
//       </Button>
//       <Toast />
//     </>
//   ),
//   args: {
//     durationMs: 5000,
//   },
// };

export const Default: Story = {
  render: () => (
    <>
      <Button
        variant="secondary"
        model="outline"
        onClick={() => toast.success('Create Success Toast')}
      >
        Create Success Toast
      </Button>
      <Toast durationMs={5000} />
    </>
  ),
  args: {
    durationMs: 5000,
  },
};

export const Error: Story = {
  render: () => (
    <>
      <Button
        variant="secondary"
        model="outline"
        onClick={() => toast.error('Create Error Toast')}
      >
        Create Error Toast
      </Button>
      <Toast durationMs={5000} />
    </>
  ),
  args: {
    durationMs: 5000,
  },
};

export const Loading: Story = {
  render: () => (
    <>
      <Button
        variant="secondary"
        model="outline"
        onClick={() => {
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: 'Loading...',
            success: 'Success',
            error: 'Error',
          });
        }}
      >
        Create a Success Promise Toast
      </Button>
      <Toast durationMs={5000} />
    </>
  ),
  args: {
    durationMs: 5000,
  },
};

export const ErrorPromise: Story = {
  render: () => (
    <>
      <Button
        variant="secondary"
        model="outline"
        onClick={() => {
          toast.promise(
            new Promise((_resolve, reject) => setTimeout(reject, 1000)),
            {
              loading: 'Loading...',
              success: 'Success',
              error: 'Error',
            },
          );
        }}
      >
        Create an Error Promise Toast
      </Button>
      <Toast durationMs={5000} />
    </>
  ),
  args: {
    durationMs: 5000,
  },
};

export const CustomIcon: Story = {
  render: () => (
    <>
      <Button
        variant="secondary"
        model="outline"
        onClick={() => {
          toast('Hello World', { icon: '👏' });
        }}
      >
        Custom Icon Toast
      </Button>
      <Toast durationMs={5000} />
    </>
  ),
  args: {
    durationMs: 5000,
  },
};
