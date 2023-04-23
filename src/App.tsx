import { ThemeProvider } from '@emotion/react';
import { Box, Button } from 'components';
import { DEFAULT_THEME, GlobalStyles, rem } from 'theme';

function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <div css={{ padding: rem(16) }}>
        <h1>Vinena UI</h1>
        <Box css={{ marginBottom: rem(16) }}>Merhaba</Box>
        <div css={{ display: 'flex', gap: rem(32) }}>
          <Button size="large">Button</Button>
          <Button>Button</Button>
          <Button size="small">Button</Button>
        </div>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
