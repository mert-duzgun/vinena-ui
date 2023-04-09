import { fireEvent, render } from '@testing-library/react';
import { test, vitest } from 'vitest';

import { Button } from './Button';

test('renders button with default props', () => {
  const { getByText } = render(<Button>Click me</Button>);
  const button = getByText('Click me');
  expect(button.tagName).toBe('BUTTON');
  expect(button).toHaveClass(
    'px-4',
    'py-3',
    'text-base',
    'bg-primary-500',
    'border-primary-500',
    'rounded'
  );
});

test('renders anchor with href prop', () => {
  const { getByText } = render(
    <Button as="a" href="/example">
      Go to example
    </Button>
  );
  const anchor = getByText('Go to example');
  expect(anchor.tagName).toBe('A');
  expect(anchor).toHaveAttribute('href', '/example');
  expect(anchor).toHaveClass(
    'px-4',
    'py-3',
    'text-base',
    'bg-primary-500',
    'border-primary-500',
    'rounded'
  );
});

test('renders small button', () => {
  const { getByText } = render(<Button size="small">Small button</Button>);
  const button = getByText('Small button');
  expect(button).toHaveClass('px-4', 'py-2', 'text-sm');
});

test('renders large button', () => {
  const { getByText } = render(<Button size="large">Large button</Button>);
  const button = getByText('Large button');
  expect(button).toHaveClass('px-4', 'py-3.5', 'text-lg');
});

test('renders primary button', () => {
  const { getByText } = render(<Button variant="primary">Primary button</Button>);
  const button = getByText('Primary button');
  expect(button).toHaveClass(
    'text-white',
    'bg-primary-500',
    'border-primary-500',
    'hover:bg-primary-700',
    'hover:border-primary-700'
  );
});

test('renders secondary button', () => {
  const { getByText } = render(<Button variant="secondary">Secondary button</Button>);
  const button = getByText('Secondary button');
  expect(button).toHaveClass(
    'text-primary-500',
    'bg-transparent',
    'border-primary-500',
    'hover:bg-primary-50'
  );
});

test('calls onClick function when button is clicked', () => {
  const onClick = vitest.fn();
  const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('disables button when disabled prop is true', () => {
  const { getByText } = render(<Button disabled>Click me</Button>);
  const button = getByText('Click me');
  expect(button).toHaveAttribute('disabled');
});

test('disables anchor when disabled prop is true', () => {
  const { getByText } = render(
    <Button as="a" href="/example" disabled>
      Go to example
    </Button>
  );
  const anchor = getByText('Go to example');
  expect(anchor).toHaveAttribute('disabled');
});
