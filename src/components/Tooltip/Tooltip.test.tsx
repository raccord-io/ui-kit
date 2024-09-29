import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Tooltip } from '.';

describe('Components | Toggle', () => {
  test('it should render', () => {
    render(<Tooltip content="Tooltip"></Tooltip>);

    expect(screen.getByTestId('Tooltip')).toBeInTheDocument();
  });
  test('it should render with custom content', () => {
    render(<Tooltip content="Custom tooltip content">Hover over me</Tooltip>);

    expect(screen.getByText('Custom tooltip content')).toBeInTheDocument();
  });
});
