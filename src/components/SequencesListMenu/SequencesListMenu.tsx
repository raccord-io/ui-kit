import { ReactNode, useState, forwardRef } from 'react';

import { ChevronRight, ChevronDown, Pencil, Trash2 } from 'lucide-react';

export interface ItemProps {
  mode?: 'main' | 'sub'; // default: sub
  key?: string;
  backgroundColor?: string;
  textColor?: string;
  label?: string;
  children?: ItemProps[] | ReactNode[];
  onClickSequence?: () => void;
}

export interface SequencesListMenuItemsProps {
  item: ItemProps;
  idx: number;
  isActive: boolean;
}

export interface SequencesListMenuProps {
  items: ItemProps[];
  activeSequenceId: string;
}

interface TagConnectorContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onClickEdit?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClickDelete?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const TagConnectorContainer = forwardRef<
  HTMLDivElement,
  TagConnectorContainerProps
>((props, ref) => {
  const { children, onClickEdit, onClickDelete, ...rest } = props;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      ref={ref}
      className="flex items-center justify-between transition-colors hover:bg-bg-primary_hover px-3 py-2 w-full h-9 cursor-default text-sm text-text-tertiary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {children}
      {isHovered && (
        <div className="flex items-center space-x-1">
          <div
            className="p-1 rounded-md bg-bg-secondary_hover cursor-pointer"
            onClick={onClickEdit}
          >
            <Pencil className="w-3.5 h-3.5" />
          </div>
          <div
            className="p-1 rounded-md bg-bg-secondary_hover cursor-pointer"
            onClick={onClickDelete}
          >
            <Trash2 className="w-3.5 h-3.5" />
          </div>
        </div>
      )}
    </div>
  );
});
TagConnectorContainer.displayName = 'TagConnectorContainer';

function MainModeMenu(props: SequencesListMenuItemsProps) {
  const { idx, item, isActive } = props;
  const { label, onClickSequence } = item;

  const [open, setOpen] = useState<boolean>(isActive);

  const borderRadiusClass = open ? '' : 'rounded-sm';
  const borderColorClass = open
    ? 'border-r-border-brand'
    : 'border-r-transparent';
  // const backgroundColorClass = open
  //   ? 'bg-bg-brand-primary'
  //   : 'hover:bg-bg-primary/80';
  // const textColorClass = open
  //   ? 'text-text-brand-primary'
  //   : 'hover:text-text-primary';

  const validChildren: ItemProps[] = Array.isArray(item.children)
    ? (item.children as ItemProps[]).filter(
        (child): child is ItemProps =>
          Array.isArray(child.children) && child.children.length > 0,
      )
    : [];

  return (
    <div data-testid={`sequences-list-menu-item-${idx}`} className="rounded-sm">
      <button
        className={`px-3 py-2 flex items-center gap-2 w-full
          ${borderRadiusClass} text-black border-r-4 ${borderColorClass} bg-bg-primary`}
        style={{ backgroundColor: item.backgroundColor }}
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
        <div data-testid="item-icon" className="mix-blend-difference">
          {open ? (
            <ChevronDown className="w-4 h-4 text-white" />
          ) : (
            <ChevronRight className="w-4 h-4 text-white" />
          )}
        </div>
        <p
          data-testid="item-label"
          className="mix-blend-difference w-full truncate text-white text-left text-sm uppercase"
        >
          {label}
        </p>
      </button>
      {open && validChildren.length > 0 && (
        <div data-testid="item-children" className="bg-bg-primary">
          <div className="pl-4 py-2 flex flex-col gap-2">
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
  const { label, textColor } = item;

  const [open, setOpen] = useState<boolean>(false);

  function isItemProps(child: ItemProps | ReactNode): child is ItemProps {
    return (child as ItemProps).mode !== undefined;
  }

  function LabelDisplay() {
    return (
      <div
        className="rounded-sm px-3 py-1 flex items-center justify-between gap-2 cursor-pointer h-9"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2 w-full">
          <div data-testid="item-icon">
            {open ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </div>
          <p
            data-testid="item-label"
            className="w-full truncate text-sm"
            style={{ color: textColor }}
          >
            {label} ({item.children?.length})
          </p>
        </div>
      </div>
    );
  }

  return (
    <div data-testid={`sequences-list-menu-sub-item-${idx}`}>
      <LabelDisplay />
      {open && item.children && (
        <div data-testid="item-children" className="mt-2 pl-6">
          {item.children.map((child, index) => (
            <div
              key={index}
              data-testid={`item-children-${index}`}
              className="w-full"
            >
              {!isItemProps(child) && child}
            </div>
            // <ItemDisplay
            //   data-testid={`item-children-${index}`}
            //   key={index}
            //   item={child as ItemProps}
            // />
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

function SequencesListMenu(props: SequencesListMenuProps) {
  const { items, activeSequenceId } = props;

  return (
    <div
      data-testid="sequences-list-menu"
      className="font-WorkSans w-full flex flex-col text-text-primary"
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

export { SequencesListMenu, TagConnectorContainer };
