import React, { useEffect } from 'react';
import '../src/global.css';

import type { Preview } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { colorWhite, colorGray950 } from '../presets/colors';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: colorWhite },
        { name: 'dark', value: colorGray950 },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: StoryFn, context) => {
      useEffect(() => {
        const isDark = context.globals.backgrounds?.value === colorGray950;
        document.body.classList.toggle('dark', isDark);

        // Cleanup to remove class on unmount or switch
        return () => {
          document.body.classList.remove('dark');
        };
      }, [context.globals.backgrounds?.value]);

      return (
        <div className="bg-bg-primary" style={{ padding: '20px' }}>
          <div className="w-full flex items-center justify-center">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
