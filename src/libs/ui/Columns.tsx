import type { ColumnsOptions } from '@/domain';

import type { ResponsiveProps } from './ResponsiveProps';
import { toMediaStyle } from './ResponsiveProps';

type Props = Omit<ColumnsOptions, 'columns'> &
  ResponsiveProps & {
    columns: JSX.Element[];
  };

export const Columns = ({
  columns,
  reverseColumnsWhenStacked: _reverseColumnsWhenStacked,
  space,
  stackColumnsAt: _stackColumnsAt,
  responsiveStyles,
}: Props) => {
  return (
    <div
      css={toMediaStyle(responsiveStyles)}
      style={{ display: 'flex', gap: space }}
    >
      {columns}
    </div>
  );
};
