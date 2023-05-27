import type { ButtonOptions } from '@/domain';

type Props = ButtonOptions;

export const Button = ({ text }: Props) => {
  return <button>{text}</button>;
};
