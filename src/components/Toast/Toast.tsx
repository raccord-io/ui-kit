'use client';

import { forwardRef } from 'react';

import { toast as _toast, ToastBar, Toaster } from 'react-hot-toast';

export interface ToastProps {
  durationMs?: number;
}

// import the colors from ../../../presets/colors instead of recreating them
// @maxime-carabina
// const colorBlack = '#1D1D1B';
const colorGreen300 = '#6BC1B3';
const colorRed300 = '#E62D37';
const colorWhite = '#FFFFFF';
const colorGrey100 = '#B4B9C4';
const colorBlue300 = '#004969';

const defaultDurationMs = 3000;

export const toast = _toast;

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const { durationMs, ...rest } = props;

  return (
    <div ref={ref} data-testid="toast">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: durationMs ?? defaultDurationMs,
          style: {
            background: 'var(--bg-secondary)',
            border: '2px solid',
            borderColor: 'var(--border-secondary)',
            padding: '1rem',
            borderRadius: '0.375rem',
          },
          success: {
            iconTheme: {
              primary: colorGreen300,
              secondary: colorWhite,
            },
          },
          error: {
            iconTheme: {
              primary: colorRed300,
              secondary: colorWhite,
            },
          },
          loading: {
            iconTheme: {
              secondary: colorGrey100,
              primary: colorBlue300,
            },
          },
        }}
        {...rest}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <div className="w-full flex justify-between gap-1 font-WorkSans text-sm text-text-primary">
                {icon}
                {message}
              </div>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
});

Toast.displayName = 'Toast';

export { Toast };
