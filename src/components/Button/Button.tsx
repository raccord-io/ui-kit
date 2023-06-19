import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { IconContext } from 'react-icons/lib';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  preIcon?: ReactNode;
  posIcon?: ReactNode;
  variant?: 'danger';
  customClass?: string;
}

export function Button(props: ButtonProps) {
  const {
    children,
    preIcon,
    posIcon,
    variant = 'primary',
    customClass,
    ...rest
  } = props;

  interface Classes {
    [key: string]: string | object;
  }

  const classes: Classes = {
    primary: 'default-primary',
    danger: 'default-danger',
  };

  return (
    <button
      data-testid="button"
      type="button"
      className={`default-button p-3.5 rounded-none ${classes[variant]} ${customClass}`}
      {...rest}
    >
      <div className="w-fit m-auto flex gap-2.5 items-center">
        <div className="m-auto">
          <IconContext.Provider value={{ className: 'w-5 h-5' }}>
            {preIcon}
          </IconContext.Provider>
        </div>
        {children}
        <div className="m-auto">
          <IconContext.Provider value={{ className: 'w-5 h-5' }}>
            {posIcon}
          </IconContext.Provider>
        </div>
      </div>
    </button>
  );
}
