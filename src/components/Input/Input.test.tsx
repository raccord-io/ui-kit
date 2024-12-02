import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Components | Input', () => {
  test('it should render', () => {
    render(<Input placeholder="Email" />);

    const input = screen.getByTestId('input');

    expect(input).toBeTruthy();
  });
});
