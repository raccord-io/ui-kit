import { ComponentPropsWithoutRef, useMemo } from 'react';

import { minidenticon } from 'minidenticons';

export interface IdenticonProps extends ComponentPropsWithoutRef<'img'> {
  username: string;
  size?: number;
  saturation?: number;
  lightness?: number;
  customClass?: string;
}

export function Identicon(props: IdenticonProps) {
  const {
    username,
    size = 64,
    saturation,
    lightness,
    customClass = '',
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
      data-testid="identicon"
      className={`bg-secondary rounded-md ${customClass}`}
      src={svgURI}
      alt={username}
      width={size.toString()}
      height={size.toString()}
      {...rest}
    />
  );
}
