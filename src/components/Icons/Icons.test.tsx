import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import { PrimaryLogo, SecondaryLogo } from './Raccord';

describe('Components | Icons | SvgIcon', () => {
  it('renders primary logo with light theme', () => {
    render(<PrimaryLogo theme="light" />);

    const icon = screen.getByTestId('raccord-primary-logo');

    expect(icon).toBeTruthy();
  });

  it('renders primary logo with dark theme', () => {
    render(<PrimaryLogo theme="dark" />);

    const icon = screen.getByTestId('raccord-primary-logo');

    expect(icon).toBeTruthy();
  });

  test('it should trigger onClick event on primary logo', () => {
    const onClickMock = jest.fn();
    render(<PrimaryLogo theme="light" onClick={onClickMock} />);

    const icon = screen.getByTestId('raccord-primary-logo');

    fireEvent.click(icon);

    expect(onClickMock).toHaveBeenCalled();
  });

  test('it should trigger onClick event on secondary logo', () => {
    const onClickMock = jest.fn();
    render(<SecondaryLogo theme="light" onClick={onClickMock} />);

    const icon = screen.getByTestId('raccord-secondary-logo');

    fireEvent.click(icon);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders secondary logo with light theme', () => {
    render(<SecondaryLogo theme="light" />);

    const icon = screen.getByTestId('raccord-secondary-logo');

    expect(icon).toBeTruthy();
  });

  it('renders secondary logo with dark theme', () => {
    render(<SecondaryLogo theme="dark" />);

    const icon = screen.getByTestId('raccord-secondary-logo');

    expect(icon).toBeTruthy();
  });
});
