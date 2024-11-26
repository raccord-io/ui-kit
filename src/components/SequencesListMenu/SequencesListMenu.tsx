import { ReactNode, useState } from 'react';

import { ChevronRight, ChevronDown } from 'lucide-react';

export interface ItemProps {
  mode?: 'main' | 'sub'; // default: sub
  label?: string;
  key?: string;
  children?: ItemProps[] | ReactNode[];
  onClickSequence?: () => void;
}

interface SequencesListMenuItemsProps {
  item: ItemProps;
  idx: number;
  isActive: boolean;
}

interface SequencesListMenuProps {
  items: ItemProps[];
  activeSequenceId: string;
}

function MainModeMenu(props: SequencesListMenuItemsProps) {
  const { idx, item, isActive } = props;
  const { label, onClickSequence } = item;

  const [open, setOpen] = useState<boolean>(isActive);

  const borderRadiusClass = open ? '' : 'rounded-sm';
  const borderColorClass = open ? 'border-brand-green' : 'border-transparent';
  const backgroundColorClass = open
    ? 'bg-brand-green/[.15]'
    : 'hover:bg-primary/[.03]';
  const textColorClass = open ? 'text-brand-green' : 'hover:text-f-primary';

  const validChildren: ItemProps[] = Array.isArray(item.children)
    ? (item.children as ItemProps[]).filter(
        (child): child is ItemProps =>
          Array.isArray(child.children) && child.children.length > 0,
      )
    : [];

  return (
    <div
      data-testid={`sequences-list-menu-item-${idx}`}
      className={`rounded-sm border-[.2px] ${borderColorClass}`}
    >
      <button
        className={`px-3 py-2 flex items-center gap-2 w-full
          ${backgroundColorClass} ${borderRadiusClass} ${textColorClass}`}
        onClick={() => {
          if (!isActive) {
            if (onClickSequence) {
              onClickSequence();
            } else {
              setOpen(!open);
            }
          }
        }}
      >
        <div data-testid="item-icon">
          {open ? <ChevronDown /> : <ChevronRight />}
        </div>
        <p data-testid="item-label" className="truncate uppercase">
          {label}
        </p>
      </button>
      {open && validChildren.length > 0 && (
        <div
          data-testid="item-children"
          className="border-t-[.2px] border-brand-green"
        >
          <div className="pl-6 flex flex-col gap-2">
            {validChildren.map((child, index) => (
              <SequencesListMenuItems
                key={index}
                idx={index}
                item={child as ItemProps}
                isActive={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SubModeMenu(props: SequencesListMenuItemsProps) {
  const { idx, item } = props;
  const { label } = item;

  const [open, setOpen] = useState<boolean>(false);

  function isItemProps(child: ItemProps | ReactNode): child is ItemProps {
    return (child as ItemProps).mode !== undefined;
  }

  return (
    <div data-testid={`sequences-list-menu-sub-item-${idx}`}>
      <div
        className="rounded-sm px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-primary/[.03]"
        onClick={() => setOpen(!open)}
      >
        <div data-testid="item-icon">
          {open ? <ChevronDown /> : <ChevronRight />}
        </div>
        <p
          data-testid="item-label truncate"
          className="w-32 truncate uppercase"
        >
          {label}
        </p>
      </div>
      {open && item.children && (
        <div
          data-testid="item-children"
          className="mt-2 pl-6 flex flex-wrap gap-2"
        >
          {item.children.map((child, index) => (
            <div key={index} data-testid={`item-children-${index}`}>
              {!isItemProps(child) && child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SequencesListMenuItems(props: SequencesListMenuItemsProps) {
  const { idx, item, isActive } = props;
  const { mode = 'sub' } = item;

  return mode === 'main' ? (
    <MainModeMenu idx={idx} item={item} isActive={isActive} />
  ) : (
    <SubModeMenu idx={idx} item={item} isActive={isActive} />
  );
}

export function SequencesListMenu(props: SequencesListMenuProps) {
  const { items, activeSequenceId } = props;

  return (
    <div
      data-testid="sequences-list-menu"
      className="rac-caption w-full flex flex-col text-f-primary"
    >
      {items.map((item, index) => (
        <SequencesListMenuItems
          key={index}
          idx={index}
          item={item}
          isActive={item.key === activeSequenceId}
        />
      ))}
    </div>
  );
}
