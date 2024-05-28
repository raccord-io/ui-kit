import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Components | Toggle', () => {
  test('it should render', () => {
    render(<Toggle />);

    let toggle = screen.getByTestId('toggle');

    expect(toggle).toBeInTheDocument();
  });
});
