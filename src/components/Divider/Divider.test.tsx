import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Divider } from './Divider';

describe('Components | Divider', () => {
  test('it should render', () => {
    render(<Divider color="black" size="1" orientation="horizontal" />);

    let divider = screen.getByTestId('divider');

    expect(divider).toBeInTheDocument();
  });
});
