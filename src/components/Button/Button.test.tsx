import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { File } from 'lucide-react';

import { Button } from './Button';

describe('Components | Button', () => {
  test('it should render', () => {
    render(<Button>something</Button>);

    let button = screen.getByTestId('button');

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

    let button = screen.getByTestId('button');
    let nested = screen.getByTestId('nested');

    expect(button).toBeTruthy();
    expect(button.textContent).toBe('something in nested');

    expect(nested).toBeTruthy();
    expect(nested.textContent).toBe('something in nested');
  });

  test('it should fire onClick event', () => {
    const somethingClicked = jest.fn();

    render(<Button onClick={somethingClicked} />);

    let button = screen.getByTestId('button');

    fireEvent.click(button);
    expect(somethingClicked).toHaveBeenCalled();
  });

  test('it should have variant icon', () => {
    render(
      <Button variant="icon" model="single">
        <File />
      </Button>,
    );

    let button = screen.getByTestId('button');

    expect(button).toHaveClass('default-icon');
  });

  test('it should have variant icon with border', () => {
    render(
      <Button variant="icon" model="border">
        <File />
      </Button>,
    );

    let button = screen.getByTestId('button');

    expect(button).toHaveClass('default-icon');
  });
});
