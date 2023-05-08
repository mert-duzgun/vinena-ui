import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT_THEME } from 'theme';
import { vitest } from 'vitest';

import { TextInput } from './TextInput';

describe('Vinena/components/TextInput', () => {
  it('should match snapshot', async () => {
    const { container } = render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput placeholder="Placeholder" />
      </ThemeProvider>
    );
    await expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without errors', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput />
      </ThemeProvider>
    );
  });

  it('should render the label and input element', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput label="Test" id={'test'} />
      </ThemeProvider>
    );
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render the helper text', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput helperText="Test helper text" />
      </ThemeProvider>
    );
    expect(screen.getByText('Test helper text')).toBeInTheDocument();
  });

  it('should disable the input element when disabled prop is passed', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput disabled />
      </ThemeProvider>
    );
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should display error colors when error prop is passed', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput error helperText="Test helper text" />
      </ThemeProvider>
    );
    expect(screen.getByRole('textbox')).toHaveStyle('box-shadow: inset 0 0 0 2px #E12D39;');
    expect(screen.getByText('Test helper text')).toHaveStyle('color: #E12D39;');
  });

  it('should render the left icon', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput leftIcon="check" />
      </ThemeProvider>
    );

    expect(screen.getByTestId('text-input-left-icon')).toBeInTheDocument();
  });

  it('should render the right icon', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput rightIcon="check" />
      </ThemeProvider>
    );
    expect(screen.getByTestId('text-input-right-icon')).toBeInTheDocument();
  });

  it('should render both left and right icons when both props are passed', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput leftIcon="check" rightIcon="check" />
      </ThemeProvider>
    );
    expect(screen.getAllByTestId(/icon/i).length).toEqual(2);
  });

  it('should handle when no props are passed', () => {
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput />
      </ThemeProvider>
    );
    expect(screen.queryByLabelText('')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.queryByTestId(/icon/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/helper/i)).not.toBeInTheDocument();
  });

  it('should call onChange handler when input is typed', async () => {
    const mockOnChange = vitest.fn();
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <TextInput onChange={mockOnChange} />
      </ThemeProvider>
    );
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test');
    expect(mockOnChange).toHaveBeenCalledTimes(4);
  });
});
