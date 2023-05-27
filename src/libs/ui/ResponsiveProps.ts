import { css } from '@emotion/react';

import type { ResponsiveStyles } from '@/domain';

type Key = keyof ResponsiveStyles;
const breakpoints: Record<Key, number> = {
  small: 320,
  medium: 768,
  large: 100,
};

export interface ResponsiveProps {
  responsiveStyles: ResponsiveStyles;
}

export const toMediaStyle = (screens: ResponsiveStyles) => {
  const styles = Object.entries(screens)
    .map(([key, style]) => ({
      [`@media (max-width: 600px)`]: { ...style, color: 'red' },
    }))
    .flat();

  console.log(styles);
  return css({ ...(screens.large ?? {}) });
  // return css({ ...styles });
};
