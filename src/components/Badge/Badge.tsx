import { forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '../../lib/utils';

export const badgeVariants = cva('rounded-[4px] w-fit flex items-center', {
  variants: {
    size: {
      sm: 'px-1.5 py-0.5 text-xs',
      md: 'px-2 py-0.5 text-sm',
      lg: 'px-2.5 py-1 text-sm',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

interface BadgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badgeVariants> {
  color:
    | string
    | 'gray'
    | 'purple'
    | 'green'
    | 'orange'
    | 'blue'
    | 'yellow'
    | 'red'
    | 'dark-blue'
    | 'neutral';
  onClickCross?: () => void;
}

interface Classes {
  [key: string]: string | object;
}

// We need to find a way to make this dynamic and not hard-coded (e.g. Tailwind CSS color matcher)
const customColorClasses: Classes = {
  '#006794': `bg-badge-dark-blue/10 text-badge-dark-blue-fg border border-badge-dark-blue-border`,
  '#8A00A9': `bg-badge-purple text-badge-purple-fg border border-badge-purple-border`,
  '#008B07': `bg-badge-green text-badge-green-fg border border-badge-green-border`,
  '#CC6B02': `bg-badge-orange text-badge-orange-fg border border-badge-orange-border`,
  '#2F45FF': `bg-badge-blue text-badge-blue-fg border border-badge-blue-border`,
  '#A68B02': `bg-badge-yellow text-badge-yellow-fg border border-badge-yellow-border`,
  '#E62D37': `bg-badge-red text-badge-red-fg border border-badge-red-border`,
  '#32322F': `bg-badge-gray text-badge-gray-fg border border-badge-gray-border`,
};

function DeleteBadge({ onClickCross }: { onClickCross?: () => void }) {
  return (
    <button
      data-testid="badge-close"
      onClick={onClickCross}
      className={`relative pl-1.5 w-fit h-full
    before:content-[''] before:absolute before:w-[1px] before:h-3.5
    before:left-0 before:top-1/2 before:-translate-y-1/2`}
    >
      <X className="w-3 h-3" />
    </button>
  );
}

const Badge = forwardRef<HTMLButtonElement, BadgeProps>((props, ref) => {
  const { color, onClickCross, size, className, children, onClick, ...rest } =
    props;

  const isClickable = onClick !== undefined;
  const isClickableDelete = onClickCross !== undefined;
  const isCustomColor =
    color !== 'neutral' &&
    color !== 'gray' &&
    color !== 'purple' &&
    color !== 'green' &&
    color !== 'orange' &&
    color !== 'blue' &&
    color !== 'yellow' &&
    color !== 'red' &&
    color !== 'dark-blue';

  const classes: Classes = {
    gray: 'bg-badge-gray text-badge-gray-fg border border-badge-gray-border',
    purple:
      'bg-badge-purple text-badge-purple-fg border border-badge-purple-border',
    green:
      'bg-badge-green text-badge-green-fg border border-badge-green-border',
    orange:
      'bg-badge-orange text-badge-orange-fg border border-badge-orange-border',
    blue: 'bg-badge-blue text-badge-blue-fg border border-badge-blue-border',
    yellow:
      'bg-badge-yellow text-badge-yellow-fg border border-badge-yellow-border',
    red: 'bg-badge-red text-badge-red-fg border border-badge-red-border',
    'dark-blue':
      'bg-badge-dark-blue/10 text-badge-dark-blue-fg border border-badge-dark-blue-border',
    neutral: 'bg-bg-primary text-text-primary border border-border-secondary',
  };

  return (
    <div
      data-testid="badge"
      className={cn(
        badgeVariants({ size, className }),
        !isCustomColor ? classes[color] : customColorClasses[color],
      )}
    >
      <button
        ref={ref}
        data-testid="badge-button"
        className={`font-WorkSans font-medium w-fit lowercase max-w-24 truncate
          ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
      {isClickableDelete && <DeleteBadge onClickCross={onClickCross} />}
    </div>
  );
});

Badge.displayName = 'Badge';

export { Badge };
