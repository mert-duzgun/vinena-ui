// Credit: https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/utils/rem/rem.ts

function createConverter(units: string) {
  return (px: unknown) => {
    if (typeof px === 'number') {
      return `${px / 16}${units}`;
    }

    if (typeof px === 'string') {
      const replaced = px.replace('px', '');
      if (!Number.isNaN(Number(replaced))) {
        return `${Number(replaced) / 16}${units}`;
      }
    }

    return px as string;
  };
}

export const rem = createConverter('rem');
export const em = createConverter('em');
