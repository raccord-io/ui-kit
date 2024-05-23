import { useEffect, useState, ComponentPropsWithoutRef } from 'react';
import { toast as _toast, Toaster } from 'react-hot-toast';
import { FiX, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { Transition } from '@headlessui/react';

import { Button } from '../Button';
import { useLocalStorage } from '../../util/useLocalStorage';

interface ToastProps extends ComponentPropsWithoutRef<'div'> {
  error?: string;
  success?: string;
  theme?: string;
}

function Error(props: ToastProps) {
  const { error } = props;

  return (
    <>
      <div
        className="inline-flex items-center justify-center flex-shrink-0
                  w-10 h-10 text-s-error bg-s-error bg-opacity-25 rounded-lg"
      >
        <FiAlertCircle size={24} />
      </div>
      <div className="ml-3 text-sm font-normal pr-6 text-s-error">{error}</div>
    </>
  );
}

function Success(props: ToastProps) {
  const { success } = props;

  return (
    <>
      <div
        className="inline-flex items-center justify-center flex-shrink-0
                        w-10 h-10 text-s-success bg-s-success bg-opacity-25 rounded-lg"
      >
        <FiCheckCircle size={24} />
      </div>
      <div className="ml-3 text-sm font-normal pr-6 text-s-success">
        {success}
      </div>
    </>
  );
}

export const toast = _toast;

export function Toast(props: ToastProps) {
  const { error, theme: _theme, ...rest } = props;

  const [storedTheme] = useLocalStorage<string>('rac-theme', 'theme-light');
  const [theme, setTheme] = useState<string>(storedTheme);
  const isError = Boolean(error);

  useEffect(() => {
    setTheme(_theme ?? storedTheme);
  }, [_theme]);

  return (
    <div data-testid="toast">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
        }}
      >
        {(t) => (
          <Transition
            appear
            show={t.visible}
            // className="transform transition-all duration-200"
            enter="transition ease-in-out transform"
            enterFrom="-translate-y-0"
            enterTo="translate-y-full"
            leave="transition ease-in-out transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`${theme} flex items-center w-fit p-4 text-secondary bg-primary rounded-lg shadow`}
              {...rest}
            >
              {t.type === 'error' || isError ? (
                <Error error={t.message?.toString()} {...props} />
              ) : (
                <Success success={t.message?.toString()} {...props} />
              )}
              <Button
                customClass="w-fit"
                variant="icon"
                onClick={() => toast.dismiss(t.id)}
              >
                <FiX />
              </Button>
            </div>
          </Transition>
        )}
      </Toaster>
    </div>
  );
}
