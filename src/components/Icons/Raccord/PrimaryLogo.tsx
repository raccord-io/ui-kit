import { ComponentPropsWithoutRef } from 'react';

import PrimaryLogoBlack from './Logo_primaire_noir.png';
import PrimaryLogoWhite from './Logo_primaire_blanc.png';

interface PrimaryLogoProps extends ComponentPropsWithoutRef<'div'> {
  theme?: 'theme-dark' | 'theme-light';
  width?: number;
  height?: number;
}

export function PrimaryLogo(props: PrimaryLogoProps) {
  let { theme = 'theme-dark', width, height, ...rest } = props;

  const isDark = theme === 'theme-dark';

  return (
    <div className="w-fit" data-testid="raccord-primary-logo" {...rest}>
      {isDark ? (
        <img
          width={width || 495}
          height={height || 158}
          src={PrimaryLogoBlack}
          alt="Primary Logo"
        />
      ) : (
        <img
          width={width || 495}
          height={height || 158}
          src={PrimaryLogoWhite}
          alt="Primary Logo"
        />
      )}
    </div>
  );
}
