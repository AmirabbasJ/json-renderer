import { css } from '@emotion/react';

import type { ImageOptions } from '@/domain';

import type { ResponsiveProps } from './ResponsiveProps';
import { toMediaStyle } from './ResponsiveProps';

type Props = ImageOptions & ResponsiveProps;

export const Image = ({
  image,
  lazy,
  sizes,
  responsiveStyles,
  ...styles
}: Props) => {
  return (
    <div>
      <img
        css={css(toMediaStyle(responsiveStyles))}
        src={image}
        alt="test"
        sizes={sizes}
        loading={lazy ? 'lazy' : 'eager'}
        style={styles}
      />
    </div>
  );
};
