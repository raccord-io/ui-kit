import React, { forwardRef } from 'react';

import { LoaderCircle } from 'lucide-react';
import Image from 'next/image';

import loader from '../../assets/loader/mini-loading-logo.gif';
import { cn } from '../../lib/utils';

interface LoaderProps extends React.HTMLAttributes<SVGSVGElement> {
  size?: number;
  type?: 'circle' | 'raccord';
}

const Loader = forwardRef<SVGSVGElement, LoaderProps>((props, ref) => {
  const { size = 24, type = 'circle', className, ...rest } = props;

  return type === 'circle' ? (
    <LoaderCircle
      ref={ref}
      data-testid="loader-circle"
      strokeWidth={2}
      size={size}
      className={cn('animate-spin text-text-primary', className)}
      {...rest}
    />
  ) : (
    <Image
      data-testid="loader-raccord"
      src={loader}
      alt="Loader"
      width={size}
      height={size}
      priority
    />
  );
});

Loader.displayName = 'Loader';

export { Loader };
