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
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      css={toMediaStyle(responsiveStyles)}
      src={image}
      sizes={sizes}
      loading={lazy ? 'lazy' : 'eager'}
      style={styles}
    />
  );
};
