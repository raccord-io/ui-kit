import { ComponentPropsWithoutRef } from 'react';

import SecondaryLogoBlack from './Logo_secondaire_noir.png';

interface PrimaryLogoProps extends ComponentPropsWithoutRef<'div'> {
  theme?: 'theme-dark' | 'theme-light';
  width?: number;
  height?: number;
}

export function SecondaryLogo(props: PrimaryLogoProps) {
  let { theme = 'theme-dark', width, height, ...rest } = props;

  const isDark = theme === 'theme-dark';

  return (
    <div className="w-fit" data-testid="raccord-secondary-logo" {...rest}>
      {isDark ? (
        <img
          width={width || 245}
          height={height || 204}
          src={SecondaryLogoBlack}
          alt="Secondary Logo"
        />
      ) : (
        <img
          width={width || 245}
          height={height || 204}
          src={SecondaryLogoBlack}
          alt="Secondary Logo"
        />
      )}
    </div>
  );
}
