// Credit: https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/utils/px/px.ts

export function px(value: unknown) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    if (value.includes('px')) {
      return Number(value.replace('px', ''));
    }

    if (value.includes('rem')) {
      return Number(value.replace('rem', '')) * 16;
    }

    return Number(value);
  }

  return NaN;
}