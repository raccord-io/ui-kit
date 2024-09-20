// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { ComponentPropsWithoutRef } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  enableBorder?: boolean;
  bgColor?: string;
  customClass?: string;
}

export function Card({
  bgColor = 'bg-secondary',
  enableBorder = true,
  customClass = '',
  children,
  ...rest
}: CardProps) {
  const borderClass = enableBorder ? 'border-2 border-primary' : 'border-none';
  return (
    <div
      data-testid="card"
      className={`${bgColor} ${borderClass} w-full h-fit text-f-primary rounded-sm ${customClass}`}
      {...rest}
    >
      {children}
    </div>
  );
}
