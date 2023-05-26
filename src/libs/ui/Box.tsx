interface Props {
  children?: React.ReactNode;
}

export const Box = ({ children }: Props) => {
  return <div>{children}</div>;
};
