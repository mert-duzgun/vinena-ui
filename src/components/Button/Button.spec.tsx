import { getByTestId } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vitest } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('should render the default button correctly', async () => {
    const { container } = render(<Button>Click me!</Button>);
    await expect(container.firstChild).toMatchSnapshot();
  });

  test('renders correctly', () => {
    render(<Button>Click me!</Button>);
    const button = screen.getByRole('button', { name: 'Click me!' });
    expect(button).toBeInTheDocument();
  });

  test('applies the primary variant correctly', () => {
    render(<Button variant="primary">Click me!</Button>);
    const button = screen.getByRole('button', { name: 'Click me!' });
    expect(button).toHaveClass(
      'text-white bg-primary-500 border-primary-500 hover:bg-primary-700 hover:border-primary-700'
    );
  });

  test('applies the secondary variant correctly', () => {
    render(<Button variant="secondary">Click me!</Button>);
    const button = screen.getByRole('button', { name: 'Click me!' });
    expect(button).toHaveClass(
      'text-primary-500 bg-transparent border-primary-500 hover:bg-primary-50'
    );
  });

  test('applies the small size correctly', () => {
    render(<Button size="small">Click me!</Button>);
    const button = screen.getByRole('button', { name: 'Click me!' });
    expect(button).toHaveClass(
      'px-4 py-2 inline-flex items-center border transition rounded focus:outline-none focus:ring-[3px] focus:ring-primary-300 text-sm text-white bg-primary-500 border-primary-500 hover:bg-primary-700 hover:border-primary-700 disabled:bg-grayscale-300 disabled:border-grayscale-300'
    );
  });

  test('applies the large size correctly', () => {
    render(<Button size="large">Click me!</Button>);
    const button = screen.getByRole('button', { name: 'Click me!' });
    expect(button).toHaveClass(
      'px-4 py-3.5 inline-flex items-center border transition rounded focus:outline-none focus:ring-[3px] focus:ring-primary-300 text-lg text-white bg-primary-500 border-primary-500 hover:bg-primary-700 hover:border-primary-700 disabled:bg-grayscale-300 disabled:border-grayscale-300'
    );
  });

  test('handles clicks correctly', async () => {
    const user = userEvent.setup();
    const onClick = vitest.fn();
    render(<Button onClick={onClick}>Click me!</Button>);
    const button = screen.getByRole('button', { name: 'Click me!' });

    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test('renders as a link when the "as" prop is set to "a"', () => {
    render(
      <Button as="a" href="#">
        Click me!
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Click me!' });
    expect(link).toBeInTheDocument();
  });

  test('applies additional classes correctly', () => {
    render(<Button className="extra-class">Click me!</Button>);
    const button = screen.getByRole('button', { name: 'Click me!' });
    expect(button).toHaveClass('extra-class');
  });

  test('renders icon correctly as button', () => {
    const { container } = render(<Button icon="home">Click me!</Button>);
    const iconContainer = getByTestId(container, 'icon-container');
    expect(iconContainer).toBeInTheDocument();
  });

  test('renders icon correctly as link', () => {
    const { container } = render(
      <Button as="a" icon="home">
        Click me!
      </Button>
    );
    const iconContainer = getByTestId(container, 'icon-container');
    expect(iconContainer).toBeInTheDocument();
  });
});
