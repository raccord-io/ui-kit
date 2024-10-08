import { ReactNode, useState } from 'react';

import { ChevronRight, ChevronDown } from 'lucide-react';

export interface ItemProps {
  mode?: 'main' | 'sub'; // default: sub
  label?: string;
  children?: ItemProps[] | ReactNode[];
  onClickInfo?: () => void;
}

interface SequencesListMenuItemsProps {
  item: ItemProps;
  idx: number;
}

interface SequencesListMenuProps {
  items: ItemProps[];
}

function MainModeMenu(props: SequencesListMenuItemsProps) {
  const { idx, item } = props;
  const { label, onClickInfo } = item;

  const [open, setOpen] = useState<boolean>(false);

  const borderRadiusClass = open ? '' : 'rounded-sm';
  const borderColorClass = open ? 'border-brand-green' : 'border-transparent';
  const backgroundColorClass = open
    ? 'bg-brand-green/[.15]'
    : 'hover:bg-primary/[.03]';
  const textColorClass = open ? 'text-brand-green' : 'hover:text-f-primary';

  return (
    <div
      data-testid={`sequences-list-menu-item-${idx}`}
      className={`rounded-sm border-[.2px] ${borderColorClass}`}
    >
      <button
        className={`px-3 py-1 flex items-center gap-2 w-full
          ${backgroundColorClass} ${borderRadiusClass} ${textColorClass}`}
        onClick={() => setOpen(!open)}
      >
        <div data-testid="item-icon">
          {open ? <ChevronDown /> : <ChevronRight />}
        </div>
        <p data-testid="item-label" className="w-32 truncate uppercase">
          {label}
        </p>
      </button>
      {open && item.children && (
        <div
          data-testid="item-children"
          className="border-t-[.2px] border-brand-green"
        >
          <div className="pl-6 py-3 flex flex-col gap-2">
            {Array.isArray(item.children)
              ? item.children.map((child, index) => (
                  <SequencesListMenuItems
                    key={index}
                    idx={index}
                    item={child as ItemProps}
                  />
                ))
              : null}
          </div>
          <p
            className="mb-4 text-center cursor-pointer underline"
            onClick={onClickInfo}
          >
            Voir les informations
          </p>
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
  const { idx, item } = props;
  const { mode = 'sub' } = item;

  return mode === 'main' ? (
    <MainModeMenu idx={idx} item={item} />
  ) : (
    <SubModeMenu idx={idx} item={item} />
  );
}

export function SequencesListMenu(props: SequencesListMenuProps) {
  const { items } = props;

  return (
    <div
      data-testid="sequences-list-menu"
      className="rac-caption w-full flex flex-col gap-3 text-f-primary"
    >
      {items.map((item, index) => (
        <SequencesListMenuItems key={index} idx={index} item={item} />
      ))}
    </div>
  );
}
