import type { TextOptions } from '@/domain';

type Props = TextOptions;

export const Text = ({ text }: Props) => {
  return <p>{text}</p>;
};
