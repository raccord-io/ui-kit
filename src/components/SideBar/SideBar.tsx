import { ReactNode, useState } from 'react';
import { IconContext } from 'react-icons';
import { FiChevronRight } from 'react-icons/fi';

export interface ItemProps {
  mode?: 'main' | 'sub'; // default: sub
  label?: string;
  children?: ItemProps[] | ReactNode[];
  onClickInfo?: () => void;
}

interface SideBarItemsProps {
  item: ItemProps;
  idx: number;
}

interface SideBarProps {
  items: ItemProps[];
}

function MainModeMenu(props: SideBarItemsProps) {
  const { idx, item } = props;
  const { label, onClickInfo } = item;

  const [open, setOpen] = useState<boolean>(false);

  const borderRadiusClass = open ? '' : 'rounded-md';
  const borderColorClass = open ? 'border-green-sheen' : 'border-transparent';
  const backgroundColorClass = open
    ? 'bg-green-sheen/[.15]'
    : 'hover:bg-primary/[.03]';
  const textColorClass = open ? 'text-green-sheen' : 'hover:text-f-primary';

  return (
    <div
      data-testid={`sidebar-item-${idx}`}
      className={`rounded-md border-[.2px] ${borderColorClass}`}
    >
      <button
        className={`px-3 py-1 flex items-center gap-2 w-full
          ${backgroundColorClass} ${borderRadiusClass} ${textColorClass}`}
        onClick={() => setOpen(!open)}
      >
        <div data-testid="item-icon">
          <IconContext.Provider
            value={{ className: `w-6 h-6 ${open && 'rotate-90'}` }}
          >
            <FiChevronRight />
          </IconContext.Provider>
        </div>
        <p data-testid="item-label" className="w-32 truncate uppercase">
          {label}
        </p>
      </button>
      {open && item.children && (
        <div
          data-testid="item-children"
          className="border-t-[.2px] border-green-sheen"
        >
          <div className="pl-6 py-3 flex flex-col gap-2">
            {Array.isArray(item.children)
              ? item.children.map((child, index) => (
                  <SideBarItems
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

function SubModeMenu(props: SideBarItemsProps) {
  const { idx, item } = props;
  const { label } = item;

  const [open, setOpen] = useState<boolean>(false);

  function isItemProps(child: ItemProps | ReactNode): child is ItemProps {
    return (child as ItemProps).mode !== undefined;
  }

  return (
    <div data-testid={`sidebar-sub-item-${idx}`}>
      <div
        className="rounded-md px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-primary/[.03]"
        onClick={() => setOpen(!open)}
      >
        <div data-testid="item-icon">
          <IconContext.Provider
            value={{ className: `w-6 h-6 ${open && 'rotate-90'}` }}
          >
            <FiChevronRight />
          </IconContext.Provider>
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

function SideBarItems(props: SideBarItemsProps) {
  const { idx, item } = props;
  const { mode = 'sub' } = item;

  return mode === 'main' ? (
    <MainModeMenu idx={idx} item={item} />
  ) : (
    <SubModeMenu idx={idx} item={item} />
  );
}

export function SideBar(props: SideBarProps) {
  const { items } = props;

  return (
    <div
      data-testid="sidebar"
      className="rac-caption w-full flex flex-col gap-3 text-f-primary"
    >
      {items.map((item, index) => (
        <SideBarItems key={index} idx={index} item={item} />
      ))}
    </div>
  );
}
