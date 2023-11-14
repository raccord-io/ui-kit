import React from 'react';
import '../src/global.css';

import type { Preview } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { colorBlack, colorWhite } from '../presets/colors';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: colorWhite },
        { name: 'dark', value: colorBlack },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <>
        <div
          className="theme-light"
          style={{ background: colorWhite, padding: '20px' }}
        >
          <h3 style={{ padding: '20px', color: colorBlack }}>Theme Light 👇</h3>
          <hr />
          <br />
          <Story />
        </div>

        <br />

        <div
          className="theme-dark"
          style={{ background: colorBlack, padding: '20px' }}
        >
          <h3 style={{ padding: '20px', color: colorWhite }}>Theme Dark 👇</h3>
          <hr />
          <br />
          <Story />
        </div>
      </>
    ),
  ],
};

export default preview;
