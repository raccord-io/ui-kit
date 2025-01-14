'use client';

import { forwardRef } from 'react';

import { Circle, Check } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Label } from '../';

export interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  steps: string[];
  step: number;
}

const baseStepClass =
  'flex items-center justify-center w-6 h-6 rounded-md shrink-0';

function StepIn() {
  return (
    <span
      data-testid="stepper-step-in"
      className={`${baseStepClass} bg-bg-brand-solid`}
    >
      <Circle className="w-1.5 h-1.5 text-white fill-white" />
    </span>
  );
}

function StepNext() {
  return (
    <span
      data-testid="stepper-step-next"
      className={`${baseStepClass} border border-border-secondary bg-bg-primary`}
    >
      <Circle className="w-1.5 h-1.5 text-text-disabled fill-text-disabled" />
    </span>
  );
}

function StepPast() {
  return (
    <span
      data-testid="stepper-step-past"
      className={`${baseStepClass} bg-bg-brand-solid`}
    >
      <Check strokeWidth={2} className="w-4 h-4 text-white" />
    </span>
  );
}

const Stepper = forwardRef<HTMLOListElement, StepperProps>((props, ref) => {
  const { step, steps, className } = props;

  const edgeClass =
    ' w-full after:content-[""] after:w-full after:h-0.5 after:inline-block after:absolute after:top-3 after:left-4';
  const edgePastClass = edgeClass + ' after:bg-bg-tertiary';
  const edgeNextClass = edgeClass + ' after:bg-bg-brand-solid';

  return (
    <ol
      ref={ref}
      className={cn('flex items-center w-full', className)}
      data-testid="stepper"
    >
      {steps.map((s, idx) => {
        const isLastStep = idx === steps.length - 1;
        const stepClass = isLastStep ? '' : edgeClass;
        let flowClass = isLastStep ? '' : edgePastClass;
        let textClass = 'text-text-disabled';

        let currentStep = <StepNext />;

        if (idx === step) {
          currentStep = <StepIn />;
          textClass = 'text-text-brand-primary';
        } else if (idx < step) {
          currentStep = <StepPast />;
          textClass = 'text-text-secondary';
          flowClass = isLastStep ? 'w-fit' : edgeNextClass;
        }

        return (
          <li
            data-testid={`stepper-item-${idx}`}
            key={idx}
            className={`relative flex ${stepClass} ${flowClass}`}
          >
            <div className="block whitespace-nowrap z-10">
              {currentStep}
              <Label className={textClass}>{s}</Label>
            </div>
          </li>
        );
      })}
    </ol>
  );
});

Stepper.displayName = 'Stepper';

export { Stepper };
