import type { SectionOptions } from '@/domain';

type Props = SectionOptions & { children?: React.ReactNode };

export const Section = ({ maxWidth, children }: Props) => {
  return <section style={{ maxWidth }}>{children}</section>;
};
