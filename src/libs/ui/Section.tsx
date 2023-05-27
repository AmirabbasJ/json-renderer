interface Props {
  maxWidth: number;
  children?: React.ReactNode;
}

export const Section = ({ maxWidth, children }: Props) => {
  return <section style={{ maxWidth }}>{children}</section>;
};
