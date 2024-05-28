import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Password } from './Password';

describe('Components | Password', () => {
  test('it should render', () => {
    render(<Password />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });

  test('it should render the closed eye icon initially', () => {
    render(<Password />);
    const closedEyeIcon = screen.getByTestId('icon-close');
    expect(closedEyeIcon).toBeInTheDocument();
  });

  test('it should toggle to open eye icon when the button is clicked', () => {
    render(<Password />);
    const passwordIconButton = screen.getByTestId('password-icon');

    // Initially should show the closed eye icon
    let closedEyeIcon = screen.getByTestId('icon-close');
    expect(closedEyeIcon).toBeInTheDocument();

    // Click the button to toggle icon
    fireEvent.click(passwordIconButton);

    // Should show the open eye icon
    const openEyeIcon = screen.getByTestId('icon-open');
    expect(openEyeIcon).toBeInTheDocument();
  });

  test('it should toggle back to closed eye icon when the button is clicked again', () => {
    render(<Password />);
    const passwordIconButton = screen.getByTestId('password-icon');

    // Initially should show the closed eye icon
    let closedEyeIcon = screen.getByTestId('icon-close');
    expect(closedEyeIcon).toBeInTheDocument();

    // Click the button to toggle icon to open eye
    fireEvent.click(passwordIconButton);
    const openEyeIcon = screen.getByTestId('icon-open');
    expect(openEyeIcon).toBeInTheDocument();

    // Click the button again to toggle back to closed eye
    fireEvent.click(passwordIconButton);
    closedEyeIcon = screen.getByTestId('icon-close');
    expect(closedEyeIcon).toBeInTheDocument();
  });

  test('it should toggle the input type between password and text', () => {
    render(<Password />);
    const passwordInput = screen.getByTestId('password-input');
    const passwordIconButton = screen.getByTestId('password-icon');

    // Initially input type should be password
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Click the button to toggle input type to text
    fireEvent.click(passwordIconButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    // Click the button again to toggle input type back to password
    fireEvent.click(passwordIconButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});
