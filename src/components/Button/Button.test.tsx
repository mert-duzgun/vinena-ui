import { ThemeProvider } from '@emotion/react';
import { fireEvent, render, screen } from '@testing-library/react';
import { DEFAULT_THEME, rem } from 'theme';
import { vitest } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('should match snapshot', async () => {
    const { container } = render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Button>Click me!</Button>
      </ThemeProvider>
    );
    await expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with default props', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Button>Click me!</Button>
      </ThemeProvider>
    );

    expect(screen.getByRole('button', { name: 'Click me!' })).toBeInTheDocument();
  });

  it('renders with a custom component prop', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Button as="a" href="https://duzgun.dev">
          Click me!
        </Button>
      </ThemeProvider>
    );

    expect(screen.getByRole('link', { name: 'Click me!' })).toHaveAttribute(
      'href',
      'https://duzgun.dev'
    );
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vitest.fn();
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Button onClick={handleClick}>Click me!</Button>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Click me!' }));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders with disabled state', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Button disabled>Click me!</Button>
      </ThemeProvider>
    );
    const button = screen.getByRole('button', { name: 'Click me!' });
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('cursor: not-allowed');
  });

  it('renders negative state', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Button negative>Click me!</Button>
      </ThemeProvider>
    );
    const button = screen.getByRole('button', { name: 'Click me!' });

    expect(button).toHaveStyle(`background-color: ${DEFAULT_THEME.colors.danger[500]}`);
  });

  it('renders small default button', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Button size="small">Click me!</Button>
      </ThemeProvider>
    );
    const button = screen.getByRole('button', { name: 'Click me!' });

    expect(button).toHaveStyle(`height: ${rem(32)}`);
  });

  it('renders large default button', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Button size="large">Click me!</Button>
      </ThemeProvider>
    );
    const button = screen.getByRole('button', { name: 'Click me!' });

    expect(button).toHaveStyle(`height: ${rem(48)}`);
  });

  it('renders small default button', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <Button size="small">Click me!</Button>
      </ThemeProvider>
    );
    const button = screen.getByRole('button', { name: 'Click me!' });

    expect(button).toHaveStyle(`height: ${rem(32)}`);
  });
});
