import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Loader } from './Loader';

describe('Components | loader', () => {
  test('it should render', () => {
    render(<Loader />);

    let loader = screen.getByTestId('loader');

    expect(loader).toBeTruthy();
  });
});

// loader with type secondary
describe('Components | loader', () => {
  test('it should render', () => {
    render(<Loader type="raccord" />);

    let loader = screen.getByTestId('loader');

    expect(loader).toBeTruthy();
  });
});
