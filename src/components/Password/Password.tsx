import { forwardRef, useState } from 'react';

import { type VariantProps } from 'class-variance-authority';
import { Eye, EyeOff } from 'lucide-react';

import { inputVariants } from '../';
import { cn } from '../../lib/utils';

export interface PasswordProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {
  inputSize?: 'xs' | 'sm' | 'default' | 'lg' | '2xl';
}

const Password = forwardRef<HTMLInputElement, PasswordProps>((props, ref) => {
  const { inputSize, className, ...rest } = props;

  const open = {
    type: 'text',
    icon: (
      <EyeOff className="w-5 h-5 text-text-secondary" data-testid="icon-open" />
    ),
  };

  const close = {
    type: 'password',
    icon: (
      <Eye className="w-5 h-5 text-text-secondary" data-testid="icon-close" />
    ),
  };

  const [{ type, icon }, setType] = useState(close);

  function toggleIcon() {
    return type === 'password' ? setType(open) : setType(close);
  }

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2',
        inputVariants({ inputSize, className }),
      )}
    >
      <input
        type={type}
        data-testid="password"
        ref={ref}
        className="w-full"
        {...rest}
      />
      <button
        type="button"
        className="bg-transparent flex items-center justify-center"
        data-testid="password-icon"
        onClick={toggleIcon}
      >
        {icon}
      </button>
    </div>
  );
});

Password.displayName = 'Password';

export { Password };
