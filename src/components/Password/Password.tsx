import React, { useState, forwardRef } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';

import { cn } from '../../lib/utils';
import { InputMessage } from '../Input';

export interface PasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  warning?: string | undefined;
  success?: string | undefined;
}

const Password = forwardRef<HTMLInputElement, PasswordProps>((props, ref) => {
  const { error, warning, success, className, ...rest } = props;

  const errorClass = error ? 'rac-h3 border-s-error' : '';
  const warningClass = warning ? 'rac-h3 border-s-warning' : '';
  const successClass = success ? 'rac-h3 border-s-success' : '';
  const messageClass = errorClass || warningClass || successClass;
  const iconClass = `w-5 h-5 inline-block align-text-bottom text-neutral`;

  let open = {
    type: 'text',
    icon: (
      <div data-testid="icon-open">
        <FiEyeOff className={iconClass} />
      </div>
    ),
  };

  let close = {
    type: 'password',
    icon: (
      <div data-testid="icon-close">
        <FiEye className={iconClass} />
      </div>
    ),
  };

  const [{ type, icon }, setType] = useState(close);

  function toggleIcon() {
    return type === 'password' ? setType(open) : setType(close);
  }

  return (
    <div ref={ref}>
      <div className="flex">
        <input
          data-testid="password-input"
          className={cn(
            'w-full default-input rac-menu-default h-12 pl-3 pr-10 mb-1',
            messageClass,
            className,
          )}
          type={type}
          {...rest}
        />
        <div className="-ml-9">
          <button
            type="button"
            className="w-8 h-8 bg-transparent"
            data-testid="password-icon"
            onClick={toggleIcon}
          >
            {icon}
          </button>
        </div>
      </div>
      <InputMessage error={error} warning={warning} success={success} />
    </div>
  );
});

Password.displayName = 'Password';

export { Password };
