import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Loader } from './Loader';

describe('Components | loader', () => {
  test('it should render circle loader', () => {
    render(<Loader />);

    const loader = screen.getByTestId('loader-circle');

    expect(loader).toBeTruthy();
  });

  test('it should render raccord loader', () => {
    render(<Loader type="raccord" />);

    const loader = screen.getByTestId('loader-raccord');
    expect(loader).toBeTruthy();
  });
});
