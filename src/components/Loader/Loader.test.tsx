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
