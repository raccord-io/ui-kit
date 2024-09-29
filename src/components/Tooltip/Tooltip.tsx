import { ComponentPropsWithoutRef, cloneElement, useState } from 'react';

import { HelpCircle } from 'lucide-react';

const placementClasses = {
  'top-start': 'bottom-full left-0 mb-2',
  top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
  'top-end': 'bottom-full right-0 mb-2',
  'right-start': 'left-full top-0 ml-2',
  right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  'right-end': 'left-full bottom-0 ml-2',
  'bottom-start': 'top-full left-0 mt-2',
  bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
  'bottom-end': 'top-full right-0 mt-2',
  'left-start': 'right-full top-0 mr-2',
  left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
  'left-end': 'right-full bottom-0 mr-2',
};

export interface TooltipProps extends ComponentPropsWithoutRef<'div'> {
  content: string;
  placement?: keyof typeof placementClasses;
  customClass?: string;
  children?: React.ReactNode;
}

export function Tooltip(props: TooltipProps) {
  const {
    content,
    placement = 'bottom',
    customClass,
    children,
    ...rest
  } = props;

  const [showTooltip, setShowTooltip] = useState(false);
  const icon = <HelpCircle />;
  const clonedIcon = cloneElement(icon, {
    className: 'stroke-current text-neutral',
  });

  return (
    <div
      data-testid="Tooltip"
      className="inline-flex items-center p-2 hover:cursor-pointer relative"
      {...rest}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {clonedIcon}
      <span className="ml-2 text-neutral">{children}</span>
      <div
        className={`w-fit z-10 absolute bg-tertiary p-3 rounded-md text-neutral opacity-0transition-opacity
        duration-300 ${showTooltip ? 'opacity-90' : 'opacity-0'}
          ${customClass} ${placementClasses[placement]}`}
      >
        {content}
      </div>
    </div>
  );
}
