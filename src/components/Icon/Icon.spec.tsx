import { getByTestId, render } from '@testing-library/react';

import { Icon } from './Icon';

describe('Vinena/components/Icon', () => {
  it('should render the arrow down icon', async () => {
    const { container } = render(<Icon name="arrowDown" />);
    await expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the folder icon with custom class name', () => {
    const { container } = render(<Icon name="folder" className="custom-class" />);
    const iconContainer = getByTestId(container, 'icon-container');
    expect(iconContainer.classList.contains('custom-class')).toBe(true);
  });
});
