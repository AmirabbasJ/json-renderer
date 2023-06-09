import { css } from '@emotion/react';

import type { TextOptions } from '@/domain';

import type { ResponsiveProps } from './ResponsiveProps';
import { toMediaStyle } from './ResponsiveProps';

type Props = ResponsiveProps & TextOptions;

export const Text = ({ text, responsiveStyles }: Props) => {
  return <p css={css(toMediaStyle(responsiveStyles))}>{text}</p>;
};
