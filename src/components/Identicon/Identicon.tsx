'use client';

import { forwardRef, useMemo } from 'react';

import { minidenticon } from 'minidenticons';

import { cn } from '../../lib/utils';

export interface IdenticonProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  username: string;
  size?: number;
  saturation?: number;
  lightness?: number;
}

const Identicon = forwardRef<HTMLImageElement, IdenticonProps>((props, ref) => {
  const {
    username,
    size = 64,
    saturation,
    lightness,
    className,
    ...rest
  } = props;

  const svgURI = useMemo(
    () =>
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(minidenticon(username, saturation, lightness)),
    [username, saturation, lightness],
  );

  return (
    <img
      ref={ref}
      data-testid="identicon"
      className={cn('bg-white rounded-sm', className)}
      src={svgURI}
      alt={username}
      width={size.toString()}
      height={size.toString()}
      {...rest}
    />
  );
});

Identicon.displayName = 'Identicon';

export { Identicon };
