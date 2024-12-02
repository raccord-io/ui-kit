import type { Meta, StoryObj } from '@storybook/react';

import {
  SequencesListMenu,
  SequencesListMenuProps,
  TagConnectorContainer,
} from './SequencesListMenu';

const meta = {
  title: 'Components/SequencesListMenu',
  component: SequencesListMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: {
        type: 'object',
      },
      description: 'Array of items to display in the sidebar',
    },
  },
} satisfies Meta<typeof SequencesListMenu>;

const args: SequencesListMenuProps = {
  activeSequenceId: '1',
  items: [
    {
      mode: 'main',
      label: '1. Ext. Hôpital. Jour',
      key: '1',
      backgroundColor: '#F2F8F7',
      children: [
        {
          label: 'Lieux',
          textColor: '#7c3aed',
          children: [
            <TagConnectorContainer
              key="1"
              onClick={() => {
                console.log('click The feather');
              }}
              onClickEdit={(e) => {
                e.stopPropagation();
                console.log('Edit The feather');
              }}
              onClickDelete={(e) => {
                e.stopPropagation();
                console.log('delete The feather');
              }}
            >
              The feather
            </TagConnectorContainer>,
            <TagConnectorContainer
              key="2"
              onClickEdit={(e) => {
                e.stopPropagation();
                console.log('Edit Winged');
              }}
              onClickDelete={(e) => {
                e.stopPropagation();
                console.log('delete Winged');
              }}
            >
              Winged
            </TagConnectorContainer>,
          ],
        },
        {
          label: 'Personnages',
          textColor: '#1d4ed8',
          children: [
            <TagConnectorContainer
              key="1"
              onClickEdit={(e) => {
                e.stopPropagation();
                console.log('Edit Winged 1234');
              }}
              onClickDelete={(e) => {
                e.stopPropagation();
                console.log('delete Winged 1234');
              }}
            >
              Winged
            </TagConnectorContainer>,
            <TagConnectorContainer key="2">The feather</TagConnectorContainer>,
          ],
        },
        {
          label: 'Accessoires',
          textColor: '#166534',
          children: [],
        },
      ],
    },
    {
      mode: 'main',
      label: '2. Ext. Hôpital. Jour',
      key: '2',
      backgroundColor: '#454440',
      children: [
        {
          label: 'Lieux',
          textColor: '#7c3aed',
          children: [
            <TagConnectorContainer key="1">The feather</TagConnectorContainer>,
          ],
        },
        {
          label: 'Personnages',
          textColor: '#1d4ed8',
          children: [
            <TagConnectorContainer key="1">Winged</TagConnectorContainer>,
          ],
        },
        {
          label: 'Accessoires',
          textColor: '#166534',
          children: [
            <TagConnectorContainer key="1">The feather</TagConnectorContainer>,
          ],
        },
      ],
    },
    {
      mode: 'main',
      label: '3. Ext. Hôpital. Jour',
      key: '3',
      backgroundColor: '#FFF7D3',
      children: [
        {
          label: 'Lieux',
          textColor: '#7c3aed',
          children: [
            <TagConnectorContainer key="1">The feather</TagConnectorContainer>,
          ],
        },
      ],
    },
  ],
};

// const items: SequencesListMenuProps['items'] = [
//   {
//     isActive: true,
//     item: {
//       mode: 'main',
//       label: '1. Ext. Hôpital. Jour',
//       key: '1',
//       backgroundColor: '#F2F8F7',
//       children: [
//         {
//           label: 'Lieux',
//           textColor: '#7c3aed',
//           onClickSubEdit: () => {
//             console.log('subEdit 1');
//           },
//           onClickSubDelete: () => {
//             console.log('delete 1');
//           },
//           children: ['The feather', 'Winged'],
//         },
//         {
//           label: 'Personnages',
//           textColor: '#7c3aed',
//           onClickSubEdit: () => {
//             console.log('edit personnages 1');
//           },
//           onClickSubDelete: () => {
//             console.log('delete personnages 1');
//           },
//           children: ['Winged', 'The feather'],
//         },
//         {
//           label: 'Accessoires',
//           textColor: '#7c3aed',
//           onClickSubEdit: () => {
//             console.log('edit accessoires 1');
//           },
//           onClickSubDelete: () => {
//             console.log('delete accessoires 1');
//           },
//           children: [],
//         },
//       ],
//     },
//   },
//   {
//     idx: 1,
//     isActive: false,
//     item: {
//       label: '2. Ext. Hôpital. Jour',
//       backgroundColor: '#454440',
//       key: '2',
//       children: [
//         {
//           label: 'Lieux',
//           textColor: '#7c3aed',
//           onClickSubEdit: () => {
//             console.log('edit 2');
//           },
//           onClickSubDelete: () => {
//             console.log('delete 2');
//           },
//           children: ['The feather'],
//         },
//         {
//           label: 'Personnages',
//           textColor: '#7c3aed',
//           onClickSubEdit: () => {
//             console.log('edit personnages 2');
//           },
//           onClickSubDelete: () => {
//             console.log('delete personnages 2');
//           },
//           children: ['Winged'],
//         },
//         {
//           label: 'Accessoires',
//           textColor: '#7c3aed',
//           onClickSubEdit: () => {
//             console.log('edit accessoires 2');
//           },
//           onClickSubDelete: () => {
//             console.log('delete accessoires 2');
//           },
//           children: ['The feather'],
//         },
//       ],
//     },
//   },
//   {
//     idx: 2,
//     isActive: false,
//     item: {
//       label: '3. Ext. Hôpital. Jour',
//       key: '3',
//       backgroundColor: '#FFF7D3',
//       children: [
//         {
//           label: 'Lieux',
//           textColor: '#7c3aed',
//           onClickSubEdit: () => {
//             console.log('edit 3');
//           },
//           onClickSubDelete: () => {
//             console.log('delete 3');
//           },
//           children: ['The feather'],
//         },
//       ],
//     },
//   },
// ];

export default meta;

type Story = StoryObj<typeof SequencesListMenu>;

export const Default: Story = {
  render: (args) => (
    <div className="w-60">
      <SequencesListMenu {...args} />
    </div>
  ),
  args,
};
