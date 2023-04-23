import * as React from 'react';
import { ThemeProvider } from '@emotion/react';

import { DEFAULT_THEME } from '../src/theme';

export const decorators = [
  (renderStory: any) => <ThemeProvider theme={DEFAULT_THEME}>{renderStory()}</ThemeProvider>,
];
