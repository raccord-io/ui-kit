import {
  forwardRef,
  useState,
  useEffect,
  cloneElement,
  isValidElement,
  Children,
} from 'react';
import { FiX } from 'react-icons/fi';

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
          <FiX className="w-5 h-5" />
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

// export function PopupModal(props: IPopupModalProps) {
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
    const fullModeClass = fullMode ? 'fixed top-0 left-0 right-0 z-30' : '';

    useEffect(() => {
      handleOpen();
    }, []);

    function handleOpen() {
      onOpen?.();
    }

    function handleClose() {
      setHidden('hidden');

      onClose?.();
    }

    var appendedChildren = Children.map(children, (child) => {
      return cloneElement(isValidElement(child) ? child : <></>, {
        _onClose: handleClose,
      });
    });

    return (
      <div
        ref={ref}
        data-testid="popup-modal"
        className={`${hidden} ${fullModeClass}
                  bg-secondary bg-opacity-75 w-full h-screen flex justify-center items-center max-h-full
                  overflow-x-hidden overflow-y-auto`}
      >
        <div className={cn('relative max-h-full w-2/3', className)} {...rest}>
          <div
            className={`relative bg-secondary shadow rounded-sm border-2 border-primary ${customClassNested}`}
          >
            {appendedChildren}
          </div>
        </div>
      </div>
    );
  },
);

PopupModal.displayName = 'PopupModal';

export { PopupModal };
