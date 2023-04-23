import { ThemeProvider } from '@emotion/react';
import { Box, Button } from 'components';
import { DEFAULT_THEME } from 'theme';

function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <div className="p-4">
        <h1>Vinena UI</h1>
        <Box>Merhaba</Box>
        <div css={{ display: 'flex', gap: '30px' }}>
          <Button size="small">Button</Button>
          <Button>Button</Button>
          <Button size="large">Button</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
