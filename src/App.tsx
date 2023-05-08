import { ThemeProvider } from '@emotion/react';
import VinenaLogo from 'assets/vinena.svg';
import { Button, TextInput } from 'components';
import { DEFAULT_THEME, GlobalStyles, rem } from 'theme';

function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <div css={{ padding: rem(16) }}>
        <div css={{ display: 'flex', gap: rem(16) }}>
          <img width={48} src={VinenaLogo} alt="" />
          <h1>Vinena UI</h1>
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <TextInput placeholder="Placeholder" leftIcon="search" rightIcon="arrowRight" />
          <TextInput
            placeholder="Placeholder"
            label="Label"
            leftIcon="search"
            rightIcon="arrowRight"
          />
          <TextInput
            placeholder="Placeholder"
            helperText="Helper Text"
            leftIcon="search"
            rightIcon="arrowRight"
          />
          <TextInput
            placeholder="Placeholder"
            label="Label"
            helperText="Helper Text"
            leftIcon="search"
            rightIcon="arrowRight"
          />
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <TextInput error placeholder="Placeholder" leftIcon="search" rightIcon="arrowRight" />
          <TextInput
            error
            placeholder="Placeholder"
            label="Label"
            leftIcon="search"
            rightIcon="arrowRight"
          />
          <TextInput
            error
            placeholder="Placeholder"
            helperText="Helper Text"
            leftIcon="search"
            rightIcon="arrowRight"
          />
          <TextInput
            error
            placeholder="Placeholder"
            label="Label"
            helperText="Helper Text"
            leftIcon="search"
            rightIcon="arrowRight"
          />
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <TextInput disabled placeholder="Placeholder" leftIcon="search" rightIcon="arrowRight" />
          <TextInput
            disabled
            placeholder="Placeholder"
            label="Label"
            leftIcon="search"
            rightIcon="arrowRight"
          />
          <TextInput
            disabled
            placeholder="Placeholder"
            helperText="Helper Text"
            leftIcon="search"
            rightIcon="arrowRight"
          />
          <TextInput
            disabled
            placeholder="Placeholder"
            label="Label"
            helperText="Helper Text"
            leftIcon="search"
            rightIcon="arrowRight"
          />
        </div>
        <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
          <TextInput placeholder="Placeholder" />
          <TextInput placeholder="Placeholder" label="Label" />
          <TextInput placeholder="Placeholder" helperText="Helper Text" />
          <TextInput placeholder="Placeholder" label="Label" helperText="Helper Text" />
        </div>

        <div css={{ display: 'flex', gap: rem(32), flexWrap: 'wrap' }}>
          <div css={{ display: 'flex', flexDirection: 'column' }}>
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
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" as="a" href="https://duzgun.dev" size="large">
                Button
              </Button>
              <Button leftIcon="home" as="a" href="https://duzgun.dev">
                Button
              </Button>
              <Button leftIcon="home" as="a" href="https://duzgun.dev" size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button
                leftIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="large"
                priority="secondary"
              >
                Button
              </Button>
              <Button leftIcon="home" as="a" href="https://duzgun.dev" priority="secondary">
                Button
              </Button>
              <Button
                leftIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="small"
                priority="secondary"
              >
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button
                leftIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="large"
                priority="tertiary"
              >
                Button
              </Button>
              <Button leftIcon="home" as="a" href="https://duzgun.dev" priority="tertiary">
                Button
              </Button>
              <Button
                leftIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="small"
                priority="tertiary"
              >
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" size="large">
                Button
              </Button>
              <Button leftIcon="home">Button</Button>
              <Button leftIcon="home" size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" size="large" priority="secondary">
                Button
              </Button>
              <Button leftIcon="home" priority="secondary">
                Button
              </Button>
              <Button leftIcon="home" size="small" priority="secondary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" size="large" priority="tertiary">
                Button
              </Button>
              <Button leftIcon="home" priority="tertiary">
                Button
              </Button>
              <Button leftIcon="home" size="small" priority="tertiary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" disabled size="large">
                Button
              </Button>
              <Button leftIcon="home" disabled>
                Button
              </Button>
              <Button leftIcon="home" disabled size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" disabled size="large" priority="secondary">
                Button
              </Button>
              <Button leftIcon="home" disabled priority="secondary">
                Button
              </Button>
              <Button leftIcon="home" disabled size="small" priority="secondary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" disabled size="large" priority="tertiary">
                Button
              </Button>
              <Button leftIcon="home" disabled priority="tertiary">
                Button
              </Button>
              <Button leftIcon="home" disabled size="small" priority="tertiary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative size="large">
                Button
              </Button>
              <Button leftIcon="home" negative>
                Button
              </Button>
              <Button leftIcon="home" negative size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative size="large" priority="secondary">
                Button
              </Button>
              <Button leftIcon="home" negative priority="secondary">
                Button
              </Button>
              <Button leftIcon="home" negative size="small" priority="secondary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative size="large" priority="tertiary">
                Button
              </Button>
              <Button leftIcon="home" negative priority="tertiary">
                Button
              </Button>
              <Button leftIcon="home" negative size="small" priority="tertiary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative disabled size="large">
                Button
              </Button>
              <Button leftIcon="home" negative disabled>
                Button
              </Button>
              <Button leftIcon="home" negative disabled size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative disabled size="large" priority="secondary">
                Button
              </Button>
              <Button leftIcon="home" negative disabled priority="secondary">
                Button
              </Button>
              <Button leftIcon="home" negative disabled size="small" priority="secondary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative disabled size="large" priority="tertiary">
                Button
              </Button>
              <Button leftIcon="home" negative disabled priority="tertiary">
                Button
              </Button>
              <Button leftIcon="home" negative disabled size="small" priority="tertiary">
                Button
              </Button>
            </div>
          </div>
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" as="a" href="https://duzgun.dev" size="large">
                Button
              </Button>
              <Button rightIcon="home" as="a" href="https://duzgun.dev">
                Button
              </Button>
              <Button rightIcon="home" as="a" href="https://duzgun.dev" size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button
                rightIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="large"
                priority="secondary"
              >
                Button
              </Button>
              <Button rightIcon="home" as="a" href="https://duzgun.dev" priority="secondary">
                Button
              </Button>
              <Button
                rightIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="small"
                priority="secondary"
              >
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button
                rightIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="large"
                priority="tertiary"
              >
                Button
              </Button>
              <Button rightIcon="home" as="a" href="https://duzgun.dev" priority="tertiary">
                Button
              </Button>
              <Button
                rightIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="small"
                priority="tertiary"
              >
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" size="large">
                Button
              </Button>
              <Button rightIcon="home">Button</Button>
              <Button rightIcon="home" size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" size="large" priority="secondary">
                Button
              </Button>
              <Button rightIcon="home" priority="secondary">
                Button
              </Button>
              <Button rightIcon="home" size="small" priority="secondary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" size="large" priority="tertiary">
                Button
              </Button>
              <Button rightIcon="home" priority="tertiary">
                Button
              </Button>
              <Button rightIcon="home" size="small" priority="tertiary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" disabled size="large">
                Button
              </Button>
              <Button rightIcon="home" disabled>
                Button
              </Button>
              <Button rightIcon="home" disabled size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" disabled size="large" priority="secondary">
                Button
              </Button>
              <Button rightIcon="home" disabled priority="secondary">
                Button
              </Button>
              <Button rightIcon="home" disabled size="small" priority="secondary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" disabled size="large" priority="tertiary">
                Button
              </Button>
              <Button rightIcon="home" disabled priority="tertiary">
                Button
              </Button>
              <Button rightIcon="home" disabled size="small" priority="tertiary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" negative size="large">
                Button
              </Button>
              <Button rightIcon="home" negative>
                Button
              </Button>
              <Button rightIcon="home" negative size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" negative size="large" priority="secondary">
                Button
              </Button>
              <Button rightIcon="home" negative priority="secondary">
                Button
              </Button>
              <Button rightIcon="home" negative size="small" priority="secondary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" negative size="large" priority="tertiary">
                Button
              </Button>
              <Button rightIcon="home" negative priority="tertiary">
                Button
              </Button>
              <Button rightIcon="home" negative size="small" priority="tertiary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" negative disabled size="large">
                Button
              </Button>
              <Button rightIcon="home" negative disabled>
                Button
              </Button>
              <Button rightIcon="home" negative disabled size="small">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" negative disabled size="large" priority="secondary">
                Button
              </Button>
              <Button rightIcon="home" negative disabled priority="secondary">
                Button
              </Button>
              <Button rightIcon="home" negative disabled size="small" priority="secondary">
                Button
              </Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button rightIcon="home" negative disabled size="large" priority="tertiary">
                Button
              </Button>
              <Button rightIcon="home" negative disabled priority="tertiary">
                Button
              </Button>
              <Button rightIcon="home" negative disabled size="small" priority="tertiary">
                Button
              </Button>
            </div>
          </div>
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" as="a" href="https://duzgun.dev" size="large"></Button>
              <Button leftIcon="home" as="a" href="https://duzgun.dev"></Button>
              <Button leftIcon="home" as="a" href="https://duzgun.dev" size="small"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button
                leftIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="large"
                priority="secondary"
              ></Button>
              <Button
                leftIcon="home"
                as="a"
                href="https://duzgun.dev"
                priority="secondary"
              ></Button>
              <Button
                leftIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="small"
                priority="secondary"
              ></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button
                leftIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="large"
                priority="tertiary"
              ></Button>
              <Button leftIcon="home" as="a" href="https://duzgun.dev" priority="tertiary"></Button>
              <Button
                leftIcon="home"
                as="a"
                href="https://duzgun.dev"
                size="small"
                priority="tertiary"
              ></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" size="large"></Button>
              <Button leftIcon="home"></Button>
              <Button leftIcon="home" size="small"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" size="large" priority="secondary"></Button>
              <Button leftIcon="home" priority="secondary"></Button>
              <Button leftIcon="home" size="small" priority="secondary"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" size="large" priority="tertiary"></Button>
              <Button leftIcon="home" priority="tertiary"></Button>
              <Button leftIcon="home" size="small" priority="tertiary"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" disabled size="large"></Button>
              <Button leftIcon="home" disabled></Button>
              <Button leftIcon="home" disabled size="small"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" disabled size="large" priority="secondary"></Button>
              <Button leftIcon="home" disabled priority="secondary"></Button>
              <Button leftIcon="home" disabled size="small" priority="secondary"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" disabled size="large" priority="tertiary"></Button>
              <Button leftIcon="home" disabled priority="tertiary"></Button>
              <Button leftIcon="home" disabled size="small" priority="tertiary"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative size="large"></Button>
              <Button leftIcon="home" negative></Button>
              <Button leftIcon="home" negative size="small"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative size="large" priority="secondary"></Button>
              <Button leftIcon="home" negative priority="secondary"></Button>
              <Button leftIcon="home" negative size="small" priority="secondary"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative size="large" priority="tertiary"></Button>
              <Button leftIcon="home" negative priority="tertiary"></Button>
              <Button leftIcon="home" negative size="small" priority="tertiary"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative disabled size="large"></Button>
              <Button leftIcon="home" negative disabled></Button>
              <Button leftIcon="home" negative disabled size="small"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative disabled size="large" priority="secondary"></Button>
              <Button leftIcon="home" negative disabled priority="secondary"></Button>
              <Button leftIcon="home" negative disabled size="small" priority="secondary"></Button>
            </div>
            <div css={{ display: 'flex', gap: rem(32), marginTop: rem(16) }}>
              <Button leftIcon="home" negative disabled size="large" priority="tertiary"></Button>
              <Button leftIcon="home" negative disabled priority="tertiary"></Button>
              <Button leftIcon="home" negative disabled size="small" priority="tertiary"></Button>
            </div>
          </div>
        </div>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
