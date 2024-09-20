import React, { forwardRef, ReactNode } from 'react';

import { IconContext } from 'react-icons/lib';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva('default-button', {
  variants: {
    variant: {
      default: 'default-primary',
      secondary: 'default-secondary',
      danger: 'default-danger',
      outline:
        'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      icon: 'default-icon',
    },
    model: {
      single:
        'border-0 bg-secondary hover:bg-tertiary disabled:bg-secondary disabled:text-tertiary',
      border:
        'disabled:text-tertiary disabled:bg-secondary disabled:border-tertiary disabled:hover:border-tertiary',
    },
  },
  defaultVariants: {
    variant: 'default',
    model: null,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  preIcon?: ReactNode;
  posIcon?: ReactNode;
}

export function ButtonIcon(props: ButtonProps) {
  const { children, variant, model, className, ...rest } = props;

  return (
    <button
      data-testid="button"
      type="button"
      className={cn(
        buttonVariants({ variant, model, className }),
        'default-button default-icon',
      )}
      {...rest}
    >
      {/* <div className="relative w-full flex justify-center items-center">
        {showHoverText && (
          <div
            className="absolute text-secondary top-[-44px] w-fit z-10 bg-neutral
          rac-caption rounded-md whitespace-nowrap"
          >
            <p className="w-fit py-1 px-2">{hoverText}</p>
            <div className="absolute flex flex-col w-full items-center justify-center">
              <div
                className="w-0 h-0 border-4 border-solid border-neutral
              border-l-transparent border-r-transparent border-b-transparent"
              ></div>
            </div>
          </div>
        )}
      </div> */}
      <div className="w-fit m-auto flex gap-2 items-baseline">{children}</div>
    </button>
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant,
    className,
    asChild = false,
    model,
    children,
    preIcon,
    posIcon,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'button';
  const isIcon = variant === 'icon';

  return isIcon ? (
    <ButtonIcon {...props} />
  ) : (
    <Comp
      ref={ref}
      type="button"
      data-testid="button"
      className={cn(
        buttonVariants({ variant, model, className }),
        'flex min-h-12 items-center px-4',
      )}
      {...rest}
    >
      <div className="w-fit m-auto flex items-center gap-2">
        <div className="m-auto">
          <IconContext.Provider value={{ className: 'w-6 h-6' }}>
            {preIcon}
          </IconContext.Provider>
        </div>
        {children}
        <div className="m-auto">
          <IconContext.Provider value={{ className: 'w-6 h-6' }}>
            {posIcon}
          </IconContext.Provider>
        </div>
      </div>
    </Comp>
  );
});

Button.displayName = 'Button';

export { Button };
