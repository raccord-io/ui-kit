import { describe, test, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('Components | Button', () => {
  test('it should render', () => {
    render(<Button>something</Button>);

    const button = screen.getByTestId('button');

    expect(button).toBeTruthy();
    expect(button.textContent).toBe('something');
  });

  test('it should render nested element', () => {
    const SomeComponent = () => {
      return <p data-testid="nested">something in nested</p>;
    };
    render(
      <Button>
        <SomeComponent />
      </Button>,
    );

    const button = screen.getByTestId('button');
    const nested = screen.getByTestId('nested');

    expect(button).toBeTruthy();
    expect(button.textContent).toBe('something in nested');

    expect(nested).toBeTruthy();
    expect(nested.textContent).toBe('something in nested');
  });

  test('it should fire onClick event', () => {
    const somethingClicked = jest.fn();

    render(<Button onClick={somethingClicked} />);

    const button = screen.getByTestId('button');

    fireEvent.click(button);
    expect(somethingClicked).toHaveBeenCalled();
  });

  test('it should render as child', () => {
    const SomeComponent = () => {
      return (
        <a href="" data-testid="nested">
          something in nested
        </a>
      );
    };
    render(
      <Button asChild>
        <SomeComponent />
      </Button>,
    );

    const nested = screen.getByTestId('nested');

    expect(nested).toBeTruthy();
  });
});
