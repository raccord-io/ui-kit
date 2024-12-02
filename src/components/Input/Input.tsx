import { forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const inputVariants = cva(
  'flex h-10 w-full shadow-sm rounded-md border border-border-secondary bg-bg-primary px-3 py-2 text-base font-WorkSans ring-offset-bg-primary file:border-0 file:bg-transparent file:text-sm file:font-semibold file:text-text-primary placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-bg-disabled disabled:border-border-disabled disabled:opacity-50 md:text-sm [&::-webkit-file-upload-button]:text-text-primary [&::file-selector-button]:text-text-primary',
  {
    variants: {
      inputSize: {
        default: 'px-3 py-2 text-sm',
        xs: 'px-2 py-1 text-xs',
        sm: 'px-2 py-1 text-sm',
        lg: 'px-2.5 py-1.5 text-sm',
        '2xl': 'px-3.5 py-2.5',
      },
    },
    defaultVariants: {
      inputSize: 'default',
    },
  },
);

export interface InputProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {
  inputSize?: 'xs' | 'sm' | 'default' | 'lg' | '2xl';
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inputSize, className, type, ...rest } = props;

  return (
    <input
      type={type}
      data-testid="input"
      className={cn(inputVariants({ inputSize, className }))}
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export { Input, inputVariants };
