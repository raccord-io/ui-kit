// import { useState } from 'react';

import { X } from 'lucide-react';

interface TagProps {
  color: 'neutral' | 'blue' | 'green' | 'red' | string;
  content: string;
  customClass?: string;
  onClick?: () => void;
  onClickCross?: () => void;
}

interface Classes {
  [key: string]: string | object;
}

// We need to find a way to make this dynamic and not hard-coded (e.g. Tailwind CSS color matcher)
const customColorStates: Classes = {
  // '#FF0000': `hover:bg-red-600/20 active:bg-red-600/30`,
  // '#00FF00': `hover:bg-green-500/20 active:bg-green-500/30`,
  // '#FF9100': `hover:bg-amber-500/20 active:bg-amber-500/30`,
  // '#0000FF': `hover:bg-blue-700/20 active:bg-blue-700/30`,
  // '#FFFF00': `hover:bg-yellow-400/20 active:bg-yellow-400/30`,
  // '#C800ff': `hover:bg-fuchsia-600/20 active:bg-fuchsia-600/30`,
  // '#D1D1D1': `hover:bg-neutral-300/20 active:bg-neutral-300/30`,
  // '#676767': `hover:bg-stone-500/20 active:bg-stone-500/30`,
  '#006794': `text-[#006794] bg-[#006794]/10`,
  '#8A00A9': `text-[#8A00A9] bg-[#F5C6FF]`,
  '#008B07': `text-[#008B07] bg-[#E7FFE4]`,
  '#CC6B02': `text-[#CC6B02] bg-[#FFF7D3]`,
  '#2F45FF': `text-[#2F45FF] bg-[#E8F1FF]`,
  '#A68B02': `text-[#A68B02] bg-[#FBFFE7]`,
  '#E62D37': `text-[#E62D37] bg-[#FFF1F2]`,
  '#32322F': `text-[#32322F] bg-[#EFEFEF]`,
};

// We need to find a way to make this dynamic and not hard-coded (e.g. Tailwind CSS color matcher)
// const customSeparatorClasses: Classes = {
//   // '#FF0000': 'before:bg-red-600',
//   // '#00FF00': 'before:bg-green-500',
//   // '#FF9100': 'before:bg-amber-500',
//   // '#0000FF': 'before:bg-blue-700',
//   // '#FFFF00': 'before:bg-yellow-400',
//   // '#C800ff': 'before:bg-fuchsia-600',
//   // '#D1D1D1': 'before:bg-neutral-300',
//   // '#676767': 'before:bg-stone-500',
//   '#006794': 'before:bg-[#006794]',
//   '#8A00A9': 'before:bg-[#8A00A9]',
//   '#008B07': 'before:bg-[#008B07]',
//   '#CC6B02': 'before:bg-[#CC6B02]',
//   '#2F45FF': 'before:bg-[#2F45FF]',
//   '#A68B02': 'before:bg-[#A68B02]',
//   '#E62D37': 'before:bg-[#E62D37]',
//   '#32322F': 'before:bg-[#32322F]',
// };

function DeleteTag({
  onClickCross,
}: // color,
// isCustomColor,
// addColorStateCross,
{
  onClickCross?: () => void;
  // color: 'neutral' | 'blue' | 'green' | 'red' | string;
  // isCustomColor: boolean;
  // addColorStateCross: string | object | boolean;
}) {
  // const separatorClasses: Classes = {
  //   neutral: 'before:bg-primary',
  //   blue: 'before:bg-brand-blue',
  //   green: 'before:bg-brand-green',
  //   red: 'before:bg-brand-red',
  // };
  // ${isCustomColor ? customColorStates[color] : addColorStateCross}
  // ${isCustomColor ? customSeparatorClasses[color] : separatorClasses[color]}`}

  return (
    <button
      onClick={onClickCross}
      className={`relative pr-1.5 py-1 w-fit h-full
    before:content-[''] before:absolute before:w-[1px] before:h-3.5
    before:left-0 before:top-1/2 before:-translate-y-1/2`}
    >
      <X data-testid="tag-close" className="w-3 h-3" />
    </button>
  );
}

export function Tag(props: TagProps) {
  const { color, content, customClass, onClick, onClickCross } = props;

  // const [isHovered, setIsHovered] = useState<boolean>(false);

  const isClickable = onClick !== undefined;
  // const isClickableCross = onClickCross !== undefined;
  // const cursorVisible = isClickable ? 'cursor-pointer' : 'cursor-default';
  const isCustomColor =
    color !== 'neutral' &&
    color !== 'blue' &&
    color !== 'green' &&
    color !== 'red';

  const classes: Classes = {
    neutral: 'bg-primary/[.15] text-f-primary',
    blue: 'bg-brand-blue/[.15] text-brand-blue',
    green: 'bg-brand-green/[.15] text-brand-green',
    red: 'bg-brand-red/[.15] text-brand-red',
  };

  const colorStates: Classes = {
    neutral: 'hover:bg-primary/20 active:bg-primary/30',
    blue: 'hover:bg-brand-blue/20 active:bg-brand-blue/30',
    green: 'hover:bg-brand-green/20 active:bg-brand-green/30',
    red: 'hover:bg-brand-red/20 active:bg-brand-red/30',
  };

  const addColorState = isClickable && colorStates[color];
  const addCustomColorState = isClickable && customColorStates[color];
  // const addColorStateCross = isClickableCross && colorStates[color];
  // ${cursorVisible}

  return (
    <div
      data-testid="tag"
      className={`rounded-[4px] w-fit flex items-center
        ${!isCustomColor ? classes[color] : ''}
      `}
      style={
        isCustomColor ? { backgroundColor: `${color}15`, color: color } : {}
      }
      // onMouseOver={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <button
        data-testid="tag-button"
        className={`rac-caption px-1.5 py-1 w-fit lowercase max-w-24 truncate
          ${isCustomColor ? addCustomColorState : addColorState}
          ${customClass}
        `}
        onClick={onClick}
      >
        {content}
      </button>
      {/* {isHovered && ( */}
      <DeleteTag
        onClickCross={onClickCross}
        // color={color}
        // isCustomColor={isCustomColor}
        // addColorStateCross={addColorStateCross}
      />
      {/* )} */}
    </div>
  );
}
