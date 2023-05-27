import type { ResponsiveProps } from './ResponsiveProps';
import { toMediaStyle } from './ResponsiveProps';

interface Props extends ResponsiveProps {
  children?: React.ReactNode;
}

export const Box = ({ children, responsiveStyles }: Props) => {
  return <div css={toMediaStyle(responsiveStyles)}>{children}</div>;
};
