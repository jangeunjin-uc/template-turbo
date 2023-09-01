import React from 'react';

import { Preview } from '@storybook/react';
import '../src/assets/style/index.scss';
import 'ui/src/assets/style/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="storybook-wrapper">
        <Story />
      </div>
    ),
  ],
};

export default preview;
