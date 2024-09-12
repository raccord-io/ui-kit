import { ComponentPropsWithoutRef } from 'react';

import PrimaryLogoBlack from '../../../assets/images/Logo_primaire_noir.png';
import PrimaryLogoWhite from '../../../assets/images/Logo_primaire_blanc.png';

interface PrimaryLogoProps extends ComponentPropsWithoutRef<'div'> {
  theme?: 'theme-dark' | 'theme-light';
  size?: number;
}

export function PrimaryLogo(props: PrimaryLogoProps) {
  let { theme = 'theme-dark', size, ...rest } = props;

  const isDark = theme === 'theme-dark';

  return (
    <div className="w-fit" data-testid="raccord-primary-logo" {...rest}>
      {isDark ? (
        <img width={size || 495} src={PrimaryLogoBlack} alt="Primary Logo" />
      ) : (
        <img width={size || 495} src={PrimaryLogoWhite} alt="Primary Logo" />
      )}
    </div>
  );
}
