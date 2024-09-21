import React, { forwardRef } from 'react';

import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  warning?: string | undefined;
  success?: string | undefined;
  onClickIcon?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error, warning, success, className, ...rest } = props;

  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const successClass = success ? 'border-s-success' : '';
  const messageClass = errorClass || warningClass || successClass;

  return (
    <div ref={ref}>
      <input
        data-testid="input-field"
        className={cn(
          'w-full rac-menu-default default-input h-12 pl-2 pr-10 mb-1',
          messageClass,
          className,
        )}
        type="text"
        {...rest}
      />
      <InputMessage error={error} warning={warning} />
    </div>
  );
});

export function InputMessage(props: InputProps) {
  const { error, warning, success } = props;

  const errorClass = error ? 'rac-h3 text-s-error' : '';
  const warningClass = warning ? 'rac-h3 text-s-warning' : '';
  const successClass = success ? 'rac-h3 text-s-success' : '';

  const messageClass = errorClass || warningClass || successClass;
  const hasMessage = error || warning || success;

  if (hasMessage) {
    return (
      <div
        data-testid="input-field-message"
        className={`font-WorkSans font-normal ${messageClass}`}
      >
        {error || warning || success}
      </div>
    );
  } else {
    return null;
  }
}

Input.displayName = 'Input';

export { Input };
