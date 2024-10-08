import {
  forwardRef,
  useState,
  useEffect,
  cloneElement,
  isValidElement,
  Children,
} from 'react';

import { X } from 'lucide-react';

import { cn } from '../../lib/utils';

interface IPopupModalProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'hidden' | 'displayed' | undefined;
  fullMode?: boolean;
  customClassNested?: string;
  // both exposed function should be declared as:
  // onOpen?(): any;
  // however by some reason jest does not recognize
  onOpen?: () => void;
  onClose?: () => void;
}

interface IPopupModalNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  customClassHeader?: string;
  customClassContent?: string;
  customClassFooter?: string;
  _onClose?: () => void;
}

export function PopupModalHeader(props: IPopupModalNodeProps) {
  const { children, _onClose, customClassHeader } = props;

  function handleClose() {
    _onClose?.();
  }

  if (children) {
    return (
      <div
        data-testid="popup-modal-header"
        className={`flex items-start justify-between px-8 pt-8 ${customClassHeader}`}
      >
        {children}
        <button
          data-testid="popup-modal-header-close"
          className="text-neutral bg-secondary text-sm p-1.5 ml-auto inline-flex items-center
                      hover:bg-tertiary hover:text-c-primary"
          type="button"
          onClick={handleClose}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    );
  }
  return null;
}

export function PopupModalContent(props: IPopupModalNodeProps) {
  const { children, customClassContent } = props;

  if (children) {
    return (
      <div
        data-testid="popup-modal-content"
        className={`px-8 ${customClassContent}`}
      >
        {children}
      </div>
    );
  }
  return null;
}

export function PopupModalFooter(props: IPopupModalNodeProps) {
  const { children, customClassFooter } = props;

  if (children) {
    return (
      <div
        data-testid="popup-modal-footer"
        className={`flex items-center px-8 pb-8 space-x-2 border-t ${customClassFooter}`}
      >
        {children}
      </div>
    );
  }
  return null;
}

const PopupModal = forwardRef<HTMLDivElement, IPopupModalProps>(
  (props, ref) => {
    const {
      status,
      fullMode = false,
      children,
      onOpen,
      onClose,
      customClassNested,
      className,
      ...rest
    } = props;
    const [hidden, setHidden] = useState(status);
    const fullModeClass = fullMode ? 'fixed inset-0 z-[100]' : '';

    useEffect(() => {
      handleOpen();

      if (fullMode && status === 'displayed') {
        document.body.style.overflow = 'hidden';
      }
    }, [status]);

    function handleOpen() {
      onOpen?.();
    }

    function handleClose() {
      document.body.style.overflow = 'auto';

      setHidden('hidden');

      onClose?.();
    }

    var appendedChildren = Children.map(children, (child) => {
      return cloneElement(isValidElement(child) ? child : <></>, {
        _onClose: handleClose,
      });
    });

    return (
      <>
        {fullMode && (
          <div
            className={`${hidden} ${fullModeClass}
              bg-secondary/75 w-full h-screen overflow-hidden`}
          />
        )}
        <div
          ref={ref}
          data-testid="popup-modal"
          className={cn(
            `${hidden} m-auto w-2/3 ${
              fullMode &&
              `fixed top-[50%] left-[50%] z-[100] translate-x-[-50%] translate-y-[-50%]`
            }`,
            className,
          )}
          {...rest}
        >
          <div
            className={`relative w-full bg-secondary shadow rounded-sm border-2 border-primary ${customClassNested}`}
          >
            {appendedChildren}
          </div>
        </div>
      </>
    );
  },
);

PopupModal.displayName = 'PopupModal';

export { PopupModal };
