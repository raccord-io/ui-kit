import { ComponentPropsWithoutRef } from 'react';

interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  error?: string | undefined;
  warning?: string | undefined;
  success?: string | undefined;
  customClass?: string;
}

export function TextArea(props: TextAreaProps) {
  const { error, warning, success, customClass, ...rest } = props;

  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const successClass = success ? 'border-s-success' : '';
  const messageClass = errorClass || warningClass || successClass;

  return (
    <>
      <textarea
        data-testid="text-area"
        data-type="text-area"
        rows={3}
        maxLength={280}
        className={`w-full default-input rac-menu-default resize-none border-2 rounded-md
          px-3 py-3.5 ${messageClass} ${customClass}`}
        {...rest}
      />
      <TextAreaMessage error={error} warning={warning} success={success} />
    </>
  );
}

export function TextAreaMessage(props: TextAreaProps) {
  const { error, warning, success } = props;

  const errorClass = error ? 'rac-h3 text-s-error' : '';
  const warningClass = warning ? 'rac-h3 text-s-warning' : '';
  const successClass = success ? 'rac-h3 text-s-success' : '';

  const messageClass = errorClass || warningClass || successClass;
  const hasMessage = error || warning || success;

  if (hasMessage) {
    return (
      <div data-testid="text-area-message" className={messageClass}>
        {error || warning || success}
      </div>
    );
  } else {
    return null;
  }
}
