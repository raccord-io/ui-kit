import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Badge } from '../';

import { SequencesListMenu, ItemProps } from './SequencesListMenu';

const items: ItemProps[] = [
  {
    mode: 'main',
    label: '1. Ext. Hôpital. Jour',
    key: '1',
    backgroundColor: '#F2F8F7',
    children: [
      {
        label: 'Lieux',
      },
      {
        label: 'Personnages',
        children: [
          <Badge key="neutral" color="neutral">
            neutral
          </Badge>,
          <Badge key="blue" color="blue">
            blue
          </Badge>,
          <Badge key="red" color="red">
            red
          </Badge>,
          <Badge key="green" color="green">
            green
          </Badge>,
        ],
      },
      {
        label: 'Accessoires',
      },
    ],
  },
  {
    mode: 'main',
    label: '2. Ext. Hôpital. Nuit',
    key: '2',
    backgroundColor: '#F2F8F7',
    children: [
      {
        label: 'Lieux',
      },
      {
        label: 'Personnages',
      },
      {
        label: 'Accessoires',
      },
    ],
  },
];

describe('Components | SequencesListMenu', () => {
  test('it should render', () => {
    render(<SequencesListMenu items={items} activeSequenceId="1" />);

    const sequencesListMenu = screen.getByTestId('sequences-list-menu');

    expect(sequencesListMenu).toBeTruthy();
  });

  test('it should render 2 main items', () => {
    render(<SequencesListMenu items={items} activeSequenceId="1" />);

    // Get all items
    const sequencesListMenuItems = screen.getAllByTestId((content) => {
      return content.startsWith('sequences-list-menu-item-');
    });

    // Check if there are 2 main items
    expect(sequencesListMenuItems).toHaveLength(2);
  });
});
