import { render } from '@testing-library/react';

import { Box } from './Box';

describe('Vinena/components/Box', () => {
  it('should match snapshot', async () => {
    const { container } = render(<Box>Test</Box>);
    await expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a div by default', () => {
    const { container } = render(<Box>Test</Box>);
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
  });

  it('renders the component with custom props', () => {
    const { container } = render(
      <Box as="span" className="test">
        Test
      </Box>
    );
    expect(container.firstChild).toHaveClass('test');
    expect(container.firstChild).toBeInstanceOf(HTMLSpanElement);
  });
});
