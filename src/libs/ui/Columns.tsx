import type { ColumnsOptions } from '@/domain';

type Props = Omit<ColumnsOptions, 'columns'> & {
  columns: JSX.Element[];
};

export const Columns = ({
  columns,
  reverseColumnsWhenStacked: _reverseColumnsWhenStacked,
  space,
  stackColumnsAt: _stackColumnsAt,
}: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: space }}>
      {columns}
    </div>
  );
};
