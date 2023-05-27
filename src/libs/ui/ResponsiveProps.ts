import type { ResponsiveStyles } from '@/domain';

type Key = keyof ResponsiveStyles;
export const breakpoints: Record<Key, number> = {
  small: 320,
  medium: 768,
  large: 1200,
};

export interface ResponsiveProps {
  responsiveStyles: ResponsiveStyles;
}

export const toMediaStyle = (screens: ResponsiveStyles) => {
  const styles = Object.fromEntries(
    Object.entries(screens).map(([key, style]) => [
      `@media (min-width: ${breakpoints[key as Key]}px)`,
      style,
    ]),
  );

  return styles;
};
