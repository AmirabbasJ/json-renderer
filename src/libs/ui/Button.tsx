import type { ButtonOptions } from '@/domain';

import type { ResponsiveProps } from './ResponsiveProps';
import { toMediaStyle } from './ResponsiveProps';

type Props = ButtonOptions & ResponsiveProps;

export const Button = ({ text, responsiveStyles }: Props) => {
  return <button css={toMediaStyle(responsiveStyles)}>{text}</button>;
};
