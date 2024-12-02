import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Separator } from './Separator';

describe('Components | Separator', () => {
  test('it should render', () => {
    render(<Separator />);

    const separator = screen.getByTestId('separator-horizontal');

    expect(separator).toBeTruthy();
  });

  test('it should render with vertical orientation', () => {
    render(<Separator orientation="vertical" />);

    const separator = screen.getByTestId('separator-vertical');

    expect(separator).toBeTruthy();
  });
});
