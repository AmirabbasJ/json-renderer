import { css } from '@emotion/react';

import type { ResponsiveProps } from './ResponsiveProps';
import { toMediaStyle } from './ResponsiveProps';

interface Props extends ResponsiveProps {
  children?: React.ReactNode;
}

export const Box = ({ children, responsiveStyles }: Props) => {
  return <div css={css(toMediaStyle(responsiveStyles))}>{children}</div>;
};
