import React, { forwardRef } from 'react';

import { LoaderCircle } from 'lucide-react';

import { cn } from '../../lib/utils';

interface LoaderProps extends React.HTMLAttributes<SVGSVGElement> {
  size?: number;
}

const Loader = forwardRef<SVGSVGElement, LoaderProps>((props, ref) => {
  const { size = 24, className, ...rest } = props;

  return (
    <LoaderCircle
      ref={ref}
      data-testid="loader"
      strokeWidth={2}
      size={size}
      className={cn('animate-spin text-primary', className)}
      {...rest}
    />
  );
});

Loader.displayName = 'Loader';

export { Loader };
