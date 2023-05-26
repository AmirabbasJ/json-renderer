import type { CSSProperties } from 'react';

interface ResponsiveStyles {
  large: CSSProperties;
  medium: CSSProperties;
  small: CSSProperties;
}

export interface Component<T extends string, O extends Record<string, any>> {
  type: T;
  options: O;
  responsiveStyles?: ResponsiveStyles;
}
