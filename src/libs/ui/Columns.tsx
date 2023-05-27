import { css } from '@emotion/react';

import type { ColumnsOptions } from '@/domain';

import type { ResponsiveProps } from './ResponsiveProps';
import { toMediaStyle } from './ResponsiveProps';

type Props = Omit<ColumnsOptions, 'columns'> &
  ResponsiveProps & {
    columns: JSX.Element[];
  };

export const Columns = ({
  columns,
  // TODO: I don't know what is the purpose of this prop
  reverseColumnsWhenStacked: _reverseColumnsWhenStacked,
  space,
  stackColumnsAt,
  responsiveStyles,
}: Props) => {
  const stackOnTabletStyle = toMediaStyle(
    stackColumnsAt === 'tablet'
      ? {
          medium: {
            flexDirection: 'row',
          },
        }
      : {},
  );

  return (
    <div
      css={css(toMediaStyle(responsiveStyles), {
        display: 'flex',
        gap: space,
        ...stackOnTabletStyle,
      })}
    >
      {columns}
    </div>
  );
};
