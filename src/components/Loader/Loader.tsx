// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef } from 'react';
import { CgSpinner } from 'react-icons/cg';
import Logo from '../../assets/images/loading.gif';

const TypeLoader = {
  default: 'default',
  raccord: 'raccord',
};

interface LoaderProps extends ComponentPropsWithoutRef<'div'> {
  customClass?: string;
  size?: number;
  type?: keyof typeof TypeLoader;
}

export function Loader(props: LoaderProps) {
  const { size = 24, customClass = '', type = 'default', ...rest } = props;

  return (
    <div data-testid="loader" className={customClass} {...rest}>
      {type === 'default' ? (
        <CgSpinner size={size} className="animate-spin text-primary-500" />
      ) : (
        <img src={Logo} alt="loading" width={size} height={size} />
      )}
    </div>
  );
}
