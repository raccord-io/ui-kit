import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Clipboard } from './Clipboard';

const args = {
  rawContent: 'this is the content',
  displayedContent: 'formatted content',
  error: 'Oupps!',
  success: 'Copied!',
  customClass: '',
};

describe('Components | Clipboard', () => {
  test('it should render', () => {
    render(<Clipboard {...args} />);

    let clipboard = screen.getByTestId('clipboard-field');

    expect(clipboard).toBeInTheDocument();
  });
});
