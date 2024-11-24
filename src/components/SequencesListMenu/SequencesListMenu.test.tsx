import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { SequencesListMenu, ItemProps } from './SequencesListMenu';
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

describe('SequencesListMenu', () => {
  it('renders the menu with all main items', () => {
    render(<SequencesListMenu items={items} activeSequenceId="1" />);

    // Assert main menu items are rendered
    expect(screen.getByText('1. Ext. Hôpital. Jour')).toBeInTheDocument();
    expect(screen.getByText('2. Ext. Hôpital. Nuit')).toBeInTheDocument();
  });

  it('opens and displays children when a main item is clicked', () => {
    render(<SequencesListMenu items={items} activeSequenceId="1" />);

    const mainItemButton = screen.getByText('1. Ext. Hôpital. Jour');
    fireEvent.click(mainItemButton);

    // Assert children are displayed
    expect(screen.getByText('Lieux')).toBeInTheDocument();
    expect(screen.getByText('Personnages')).toBeInTheDocument();
    expect(screen.getByText('Accessoires')).toBeInTheDocument();
  });

  it('opens nested children when a sub-item is clicked', () => {
    render(<SequencesListMenu items={items} activeSequenceId="1" />);

    const mainItemButton = screen.getByText('1. Ext. Hôpital. Jour');
    fireEvent.click(mainItemButton);

    const subItemButton = screen.getByText('Personnages');
    fireEvent.click(subItemButton);

    // Assert nested children are displayed
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText('test2')).toBeInTheDocument();
    expect(screen.getByText('test3')).toBeInTheDocument();
    expect(screen.getByText('test4')).toBeInTheDocument();
  });

  it('toggles item visibility on click', () => {
    render(<SequencesListMenu items={items} activeSequenceId="1" />);

    const mainItemButton = screen.getByText('1. Ext. Hôpital. Jour');
    fireEvent.click(mainItemButton); // Open
    expect(screen.getByText('Lieux')).toBeVisible();

    fireEvent.click(mainItemButton); // Close
    expect(screen.queryByText('Lieux')).not.toBeInTheDocument();
  });

  it('highlights the active sequence', () => {
    render(<SequencesListMenu items={items} activeSequenceId="2" />);

    const activeItem = screen.getByText('2. Ext. Hôpital. Nuit');
    expect(activeItem).toHaveClass('text-brand-green'); // Assuming active items have this class
  });
});
