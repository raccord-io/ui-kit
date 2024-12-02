import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Identicon } from '.';

describe('Components | Fields | Identicon', () => {
  test('it should render', () => {
    render(<Identicon username="test" />);

    const identicon = screen.getByTestId('identicon');

    expect(identicon).toBeInTheDocument();
  });
});
