import type { CSSProperties } from 'react';

interface ResponsiveStyles {
  large: CSSProperties;
  medium: CSSProperties;
  small: CSSProperties;
}

export interface BaseComponent {
  type: string;
  options: Record<string, any>;
  responsiveStyles?: ResponsiveStyles;
}
