import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { SequencesListMenu, ItemProps } from './SequencesListMenu';
import { Tag } from '../Tag/Tag';

const items: ItemProps[] = [
  {
    mode: 'main',
    label: '1. Ext. Hôpital. Jour',
    key: '1',
    onClickSequence: jest.fn(),
    children: [
      {
        label: 'Lieux',
      },
      {
        label: 'Personnages',
        children: [
          <Tag color="neutral" content="test1" />,
          <Tag color="blue" content="test2" />,
          <Tag color="red" content="test3" />,
          <Tag color="green" content="test4" />,
        ],
      },
      {
        label: 'Accessoires',
      },
    ],
  },
  {
    mode: 'main',
    key: '2',
    label: '2. Ext. Hôpital. Nuit',
    onClickSequence: jest.fn(),
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

    let sequencesListMenu = screen.getByTestId('sequences-list-menu');

    expect(sequencesListMenu).toBeTruthy();
  });

  test('it should render 2 main items', () => {
    render(<SequencesListMenu items={items} activeSequenceId="1" />);

    // Get all items
    let sequencesListMenuItems = screen.getAllByTestId((content) => {
      return content.startsWith('sequences-list-menu-item-');
    });

    // Check if there are 2 main items
    expect(sequencesListMenuItems).toHaveLength(2);
  });
});
