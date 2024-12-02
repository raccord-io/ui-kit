import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { TextArea } from './TextArea';

describe('Components | TextArea', () => {
  test('it should render', () => {
    render(<TextArea placeholder="Type your message here..." />);

    const textarea = screen.getByTestId('textarea');
    expect(textarea).toBeTruthy();
  });
});
