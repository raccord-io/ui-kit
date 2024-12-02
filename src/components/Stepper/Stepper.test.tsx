import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Stepper } from './Stepper';

describe('Components | Stepper', () => {
  test('it should render', () => {
    render(<Stepper steps={['One', 'Two', 'Three']} step={0} />);

    const stepper = screen.getByTestId('stepper');

    expect(stepper).toBeTruthy();
  });

  test('it should render with correct step', () => {
    render(<Stepper steps={['One', 'Two', 'Three']} step={1} />);

    const step = screen.getByText('Two');

    expect(step).toBeTruthy();
  });

  test('it should render InStep with correct color', () => {
    render(<Stepper steps={['One', 'Two', 'Three']} step={1} />);

    const inStep = screen.getByTestId('stepper-step-in');

    expect(inStep).toHaveClass('bg-bg-brand-solid');
  });

  test('it should render NextStep with correct color', () => {
    render(<Stepper steps={['One', 'Two', 'Three']} step={1} />);

    const nextStep = screen.getByTestId('stepper-step-next');

    expect(nextStep).toHaveClass(
      'border border-border-secondary bg-bg-primary',
    );
  });

  test('it should render PastStep with correct color', () => {
    render(<Stepper steps={['One', 'Two', 'Three']} step={1} />);

    const pastStep = screen.getByTestId('stepper-step-past');

    expect(pastStep).toHaveClass('bg-bg-brand-solid');
  });

  test('it should render correctly the last completed element', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    render(<Stepper steps={steps} step={3} />);

    const lastStep = screen.getByTestId('stepper-item-2');
    expect(lastStep).toHaveClass('relative flex w-fit');

    const stepIcon = within(lastStep).getByTestId('stepper-step-past');
    expect(stepIcon).toBeInTheDocument();
  });
});
