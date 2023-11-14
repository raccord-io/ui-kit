import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { IconContext } from 'react-icons/lib';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  preIcon?: ReactNode;
  posIcon?: ReactNode;
  variant?: 'danger' | 'icon';
  model?: 'outline';
  customClass?: string;
}

export function Button(props: ButtonProps) {
  const { variant = 'primary' } = props;

  const isVariantIcon = variant === 'icon';

  return isVariantIcon ? (
    <ButtonIcon {...props} />
  ) : (
    <ButtonDefault {...props} />
  );
}

function ButtonIcon(props: ButtonProps) {
  const { children, model = 'default', customClass, ...rest } = props;

  interface Models {
    [key: string]: string | object;
  }

  const models: Models = {
    default: '',
    outline: `rounded-xl bg-green-sheen/[.15] border-[.2px] border-green-sheen text-green-sheen
      hover:bg-green-sheen/20
      disabled:bg-green-sheen/10 disabled:border-green-sheen/20 disabled:text-green-sheen/10
      active:bg-green-sheen/30 active:border-green-sheen/30`,
  };

  return (
    <button
      data-testid="button"
      type="button"
      className={`default-button default-icon ${models[model]}`}
      {...rest}
    >
      <div className="m-auto w-fit">
        <IconContext.Provider value={{ className: 'w-6 h-6' }}>
          {children}
        </IconContext.Provider>
      </div>
    </button>
  );
}

function ButtonDefault(props: ButtonProps) {
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
