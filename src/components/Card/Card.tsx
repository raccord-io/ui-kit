import React, { forwardRef } from 'react';

import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  enableBorder?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { enableBorder = true, children, className, ...rest } = props;

  const borderClass = enableBorder ? 'border-2 border-primary' : 'border-none';

  return (
    <div
      ref={ref}
      data-testid="card"
      className={cn(
        'w-full h-fit bg-secondary text-f-primary rounded-sm p-4',
        borderClass,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export { Card };
