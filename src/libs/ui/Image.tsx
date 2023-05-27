import type { ImageOptions } from '@/domain';

type Props = ImageOptions;

export const Image = ({ image, lazy, sizes, ...styles }: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={image}
      sizes={sizes}
      loading={lazy ? 'lazy' : 'eager'}
      style={styles}
    />
  );
};
