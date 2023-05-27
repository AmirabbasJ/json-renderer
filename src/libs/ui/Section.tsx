import type { SectionOptions } from '@/domain';

import type { ResponsiveProps } from './ResponsiveProps';
import { toMediaStyle } from './ResponsiveProps';

type Props = ResponsiveProps & SectionOptions & { children?: React.ReactNode };

export const Section = ({ maxWidth, children, responsiveStyles }: Props) => {
  console.log(toMediaStyle(responsiveStyles));

  return (
    <section style={{ maxWidth }} css={toMediaStyle(responsiveStyles)}>
      {children}
    </section>
  );
};
