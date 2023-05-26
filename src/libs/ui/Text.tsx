interface Props {
  text: string;
}

export const Text = ({ text }: Props) => {
  return <p>{text}</p>;
};
