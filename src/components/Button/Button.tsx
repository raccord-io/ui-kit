import React, { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-WorkSans font-medium rounded-md ring-offset-bg-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-button-primary text-button-primary-fg border-border-neutral hover:bg-button-primary_hover disabled:text-text-disabled disabled:bg-bg-disabled disabled:border-border-disabled',
        secondary:
          'bg-button-secondary text-button-secondary-fg border-border-secondary hover:bg-button-secondary_hover disabled:text-text-disabled disabled:bg-bg-secondary disabled:border-border-disabled',
        'secondary-color':
          'text-button-secondary-color-fg border-button-secondary-color-border hover:bg-button-secondary-color_hover disabled:text-text-disabled disabled:bg-bg-disabled disabled:border-border-disabled',
        link: 'text-button-secondary-fg underline-offset-4 hover:underline',
        'danger-primary':
          'bg-button-primary-error-bg border-gray-700/30 text-white hover:bg-button-primary-error-bg_hover disabled:text-text-disabled disabled:bg-bg-disabled disabled:border-border-disabled',
        'danger-secondary':
          'bg-button-secondary-error-bg border-button-secondary-error-border text-button-secondary-error-fg hover:bg-button-secondary-error-bg_hover disabled:text-text-disabled disabled',
      },
      model: {
        flat: 'border-transparent',
        outline: 'border',
      },
      size: {
        default: 'h-10 px-3.5 py-2.5 text-sm',
        sm: 'h-9 px-3 py-2 text-sm',
        lg: 'h-11 px-4 py-2.5 text-base',
        xl: 'h-12 px-[18px] py-3 text-base',
        '2xl': 'h-[60px] px-[22px] py-4 text-lg rounded-lg',
        icon: 'min-w-10 min-h-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      model: 'flat',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, className, asChild = false, model, size, ...rest } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      type="button"
      data-testid="button"
      className={cn(buttonVariants({ variant, model, size, className }))}
      {...rest}
    />
  );
});

Button.displayName = 'Button';

export { Button };
