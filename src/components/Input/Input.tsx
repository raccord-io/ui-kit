import { ComponentPropsWithoutRef } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: string | undefined;
  warning?: string | undefined;
  success?: string | undefined;
  customClass?: string;
  onClickIcon?: () => void;
}

export function Input(props: InputProps) {
  const { error, warning, success, customClass, ...rest } = props;

  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const successClass = success ? 'border-s-success' : '';
  const messageClass = errorClass || warningClass || successClass;

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          <input
            data-testid="input-field"
            className={`w-full rac-menu-default default-input h-12 pr-10 mb-1 ${messageClass} ${customClass}`}
            type="text"
            {...rest}
          />
          <InputMessage error={error} warning={warning} />
        </div>
      </div>
    </div>
  );
}

export function InputMessage(props: InputProps) {
  const { error, warning, success } = props;

  const errorClass = error ? 'rac-h3 text-s-error' : '';
  const warningClass = warning ? 'rac-h3 text-s-warning' : '';
  const successClass = success ? 'rac-h3 text-s-success' : '';

  const messageClass = errorClass || warningClass || successClass;
  const hasMessage = error || warning || success;

  if (hasMessage) {
    return (
      <div data-testid="input-field-message" className={messageClass}>
        {error || warning || success}
      </div>
    );
  } else {
    return null;
  }
}
