import * as React from 'react';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from 'types';

type BoxProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {}>;

type BoxComponent = <C extends React.ElementType = 'div'>(
  props: BoxProps<C>
) => React.ReactElement | null;

export const Box: BoxComponent = React.forwardRef(function VinenaBox<
  C extends React.ElementType = 'div'
>({ as: component, children, ...rest }: BoxProps<C>, ref?: PolymorphicRef<C>) {
  const Element = component || 'div';

  return (
    <Element ref={ref} {...rest}>
      {children}
    </Element>
  );
});
