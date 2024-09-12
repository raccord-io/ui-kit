import { ComponentPropsWithoutRef } from 'react';

import SecondaryLogoBlack from '../../../assets/images/Logo_secondaire_noir.png';

interface PrimaryLogoProps extends ComponentPropsWithoutRef<'div'> {
  theme?: 'theme-dark' | 'theme-light';
  size?: number;
}

export function SecondaryLogo(props: PrimaryLogoProps) {
  let { theme = 'theme-dark', size, ...rest } = props;

  const isDark = theme === 'theme-dark';

  return (
    <div className="w-fit" data-testid="raccord-secondary-logo" {...rest}>
      {isDark ? (
        <img
          width={size || 245}
          // height={height || 204}
          src={SecondaryLogoBlack}
          alt="Secondary Logo"
        />
      ) : (
        <img
          width={size || 245}
          // height={height || 204}
          src={SecondaryLogoBlack}
          alt="Secondary Logo"
        />
      )}
    </div>
  );
}
