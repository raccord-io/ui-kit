import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Toast } from './Toast';

describe('Components | Toast', () => {
  test('it should render', () => {
    render(<Toast />);

    const input = screen.getByTestId('toast');

    expect(input).toBeInTheDocument();
  });
  test('it should render with durationMs', () => {
    render(<Toast durationMs={5000} />);

    const input = screen.getByTestId('toast');

    expect(input).toBeInTheDocument();
  });
});
