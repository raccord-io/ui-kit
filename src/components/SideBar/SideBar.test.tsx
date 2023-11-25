import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SideBar, ItemProps } from './SideBar';
import { Tag } from '../Tag/Tag';

const items: ItemProps[] = [
  {
    mode: 'main',
    label: '1. Ext. Hôpital. Jour',
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
    label: '2. Ext. Hôpital. Nuit',
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

describe('Components | SideBar', () => {
  test('it should render', () => {
    render(<SideBar items={items} />);

    let sidebar = screen.getByTestId('sidebar');

    expect(sidebar).toBeTruthy();
  });

  test('it should render 2 main items', () => {
    render(<SideBar items={items} />);

    let sidebarItems = screen.getAllByTestId(/sidebar-item-/);

    expect(sidebarItems).toHaveLength(2);
  });
});
