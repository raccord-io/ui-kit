import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Badge } from './Badge';

describe('Components | Badge', () => {
  /*
    TESTS FOR DEFAULT STATE
  */
  test('it should render', () => {
    render(<Badge color="neutral" content="neutral color" />);

    const badge = screen.getByTestId('badge');

    expect(badge).toBeTruthy();
  });

  test('it should render with gray color', () => {
    render(<Badge color="gray">gray color</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass(
      'bg-badge-gray text-badge-gray-fg border border-badge-gray-border',
    );
  });

  test('it should render with purple color', () => {
    render(<Badge color="purple">purple color</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass(
      'bg-badge-purple text-badge-purple-fg border border-badge-purple-border',
    );
  });

  test('it should render with green color', () => {
    render(<Badge color="green">green color</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass(
      'bg-badge-green text-badge-green-fg border border-badge-green-border',
    );
  });

  test('it should render with orange color', () => {
    render(<Badge color="orange">orange color</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass(
      'bg-badge-orange text-badge-orange-fg border border-badge-orange-border',
    );
  });

  test('it should render with blue color', () => {
    render(<Badge color="blue">blue color</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass(
      'bg-badge-blue text-badge-blue-fg border border-badge-blue-border',
    );
  });

  test('it should render with yellow color', () => {
    render(<Badge color="yellow">yellow color</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass(
      'bg-badge-yellow text-badge-yellow-fg border border-badge-yellow-border',
    );
  });

  test('it should render with red color', () => {
    render(<Badge color="red">red color</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass(
      'bg-badge-red text-badge-red-fg border border-badge-red-border',
    );
  });

  test('it should render with dark-blue color', () => {
    render(<Badge color="dark-blue">dark blue color</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass(
      'bg-badge-dark-blue/10 text-badge-dark-blue-fg border border-badge-dark-blue-border',
    );
  });

  test('it should render with custom color', () => {
    render(<Badge color="#006794">custom color</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass(
      'bg-badge-dark-blue/10 text-badge-dark-blue-fg border border-badge-dark-blue-border',
    );
  });

  /*
    TEST FOR CLICKABLE STATE
  */
  test('it should call onClick when clicking the badge button', () => {
    const handleClick = jest.fn();

    render(
      <Badge color="neutral" onClick={handleClick}>
        test badge
      </Badge>,
    );

    const badgeButton = screen.getByTestId('badge-button');

    fireEvent.click(badgeButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('it should call onClickCross when clicking the close button', () => {
    const handleClickCross = jest.fn();

    render(
      <Badge color="neutral" onClickCross={handleClickCross}>
        test badge
      </Badge>,
    );

    const closeButton = screen.getByTestId('badge-close');

    fireEvent.click(closeButton);

    expect(handleClickCross).toHaveBeenCalledTimes(1);
  });
});
