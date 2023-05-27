import { Helmet } from 'react-helmet';

import type { Block, Component, Schema } from '@/domain';
import { BoxComponent } from '@/domain';
import type { ResponsiveProps } from '@/ui';
import { Box, Button, Columns, Image, Section, Text } from '@/ui';

type ComponentMapping = {
  [K in Component as K['type']]: React.FC<
    K['options'] extends undefined
      ? ResponsiveProps
      : K['options'] &
          ResponsiveProps & {
            children?: React.ReactNode;
          }
  >;
};

const ComponentMapping: ComponentMapping = {
  text: Text,
  box: Box,
  section: Section,
  image: Image,
  button: Button,
  columns: ({ columns, ...props }) => (
    <Columns
      {...props}
      columns={columns.flatMap(({ blocks }) =>
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        blocks.flatMap(n => mapBlock(n)),
      )}
    />
  ),
};

const mapBlock = (block: Block): JSX.Element => {
  const {
    children = [],
    component = BoxComponent,
    id,
    responsiveStyles = {},
  } = block;

  const { options = {} } = component;
  const Component = ComponentMapping[component.type];

  return (
    <Component
      {...(options as any)}
      responsiveStyles={responsiveStyles}
      key={id}
    >
      {children.map(b => mapBlock(b))}
    </Component>
  );
};

export const render = (schema: Schema): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{schema.title}</title>
      </Helmet>
      {schema.blocks.map(b => mapBlock(b))}
    </>
  );
};
