import { forwardRef, useState } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { cn } from '@/src/lib/utils';

const navItemVariants = cva('w-full', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface NavItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navItemVariants> {
  label: string;
  preIcon?: React.ReactNode;
}

const NavItem = forwardRef<HTMLDivElement, NavItemProps>((props, ref) => {
  const { label, preIcon, variant, onClick, className, children, ...rest } =
    props;

  const isPreIconNotExist = preIcon === undefined;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setIsOpen(!isOpen);

    if (onClick) {
      onClick(e);
    }
  }

  return (
    <div ref={ref} className="w-full">
      <button
        className={cn(
          navItemVariants({ variant, className }),
          `px-3 py-2 bg-white flex items-center gap-2 text-gray-600 rounded-mdw-full
          transition-all duration-200 ease-out hover:bg-gray-50`,
        )}
        onClick={handleClick}
        {...rest}
      >
        <div className="flex items-center gap-3 w-full">
          {preIcon}
          <span
            className={`${
              isPreIconNotExist && 'pl-9'
            } font-WorkSans font-semibold text-base`}
          >
            {label}
          </span>
        </div>
        {children ? (
          isOpen ? (
            <ChevronUp className="w-6 h-6" strokeWidth={2} />
          ) : (
            <ChevronDown className="w-6 h-6" strokeWidth={2} />
          )
        ) : null}
      </button>
      {children && isOpen && (
        <div className="mt-2 flex flex-col gap-1 w-full">{children}</div>
      )}
    </div>
  );
});

NavItem.displayName = 'NavItem';

export { NavItem };
