import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Label } from './Label';

describe('Components | Label', () => {
  test('it should render', () => {
    render(<Label>Label</Label>);

    const label = screen.getByTestId('label');

    expect(label).toBeTruthy();
  });
});
