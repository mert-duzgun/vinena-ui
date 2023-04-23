import { ThemeProvider } from '@emotion/react';
import { Box, Button } from 'components';
import { DEFAULT_THEME, GlobalStyles, rem } from 'theme';

function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <div css={{ padding: rem(16) }}>
        <h1>Vinena UI</h1>
        <Box css={{ marginBottom: rem(16) }}>Merhaba</Box>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button as="a" href="https://duzgun.dev" size="large">
            Button
          </Button>
          <Button as="a" href="https://duzgun.dev">
            Button
          </Button>
          <Button as="a" href="https://duzgun.dev" size="small">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button as="a" href="https://duzgun.dev" size="large" priority="secondary">
            Button
          </Button>
          <Button as="a" href="https://duzgun.dev" priority="secondary">
            Button
          </Button>
          <Button as="a" href="https://duzgun.dev" size="small" priority="secondary">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button as="a" href="https://duzgun.dev" size="large" priority="tertiary">
            Button
          </Button>
          <Button as="a" href="https://duzgun.dev" priority="tertiary">
            Button
          </Button>
          <Button as="a" href="https://duzgun.dev" size="small" priority="tertiary">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button size="large">Button</Button>
          <Button>Button</Button>
          <Button size="small">Button</Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button size="large" priority="secondary">
            Button
          </Button>
          <Button priority="secondary">Button</Button>
          <Button size="small" priority="secondary">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button size="large" priority="tertiary">
            Button
          </Button>
          <Button priority="tertiary">Button</Button>
          <Button size="small" priority="tertiary">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button disabled size="large">
            Button
          </Button>
          <Button disabled>Button</Button>
          <Button disabled size="small">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button disabled size="large" priority="secondary">
            Button
          </Button>
          <Button disabled priority="secondary">
            Button
          </Button>
          <Button disabled size="small" priority="secondary">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button disabled size="large" priority="tertiary">
            Button
          </Button>
          <Button disabled priority="tertiary">
            Button
          </Button>
          <Button disabled size="small" priority="tertiary">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button negative size="large">
            Button
          </Button>
          <Button negative>Button</Button>
          <Button negative size="small">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button negative size="large" priority="secondary">
            Button
          </Button>
          <Button negative priority="secondary">
            Button
          </Button>
          <Button negative size="small" priority="secondary">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button negative size="large" priority="tertiary">
            Button
          </Button>
          <Button negative priority="tertiary">
            Button
          </Button>
          <Button negative size="small" priority="tertiary">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button negative disabled size="large">
            Button
          </Button>
          <Button negative disabled>
            Button
          </Button>
          <Button negative disabled size="small">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button negative disabled size="large" priority="secondary">
            Button
          </Button>
          <Button negative disabled priority="secondary">
            Button
          </Button>
          <Button negative disabled size="small" priority="secondary">
            Button
          </Button>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <Button negative disabled size="large" priority="tertiary">
            Button
          </Button>
          <Button negative disabled priority="tertiary">
            Button
          </Button>
          <Button negative disabled size="small" priority="tertiary">
            Button
          </Button>
        </div>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
