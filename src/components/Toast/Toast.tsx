// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { toast as _toast, Toaster } from 'react-hot-toast';

export interface ToastProps {
  durationMs?: number;
}

// import the colors from ../../../presets/colors instead of recreating them
// @maxime-carabina
const colorBlack = '#1D1D1B';
const colorGreen300 = '#6BC1B3';
const colorRed300 = '#E62D37';
const colorWhite = '#FFFFFF';
const colorGrey100 = '#B4B9C4';
const colorBlue300 = '#004969';

const defaultDurationMs = 3000;

export const toast = _toast;

export function Toast(props: ToastProps) {
  const { durationMs } = props;

  return (
    <div data-testid="toast">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: durationMs ?? defaultDurationMs,
          style: {
            // I dont want the borders to be rounded
            border: '2px solid ' + colorBlack,
            color: colorBlack,
            fontFamily: 'Work Sans, sans-serif',
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
      ></Toaster>
    </div>
  );
}
