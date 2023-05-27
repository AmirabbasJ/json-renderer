import type { Block, Component, Schema } from '@/domain';
import { Box, Button, Image, Section, Text } from '@/ui';

import { Columns } from '../libs/ui/Columns';

type ComponentMapping = {
  [K in Component as K['type']]: React.FC<
    K['options'] extends undefined
      ? Record<string, never>
      : K['options'] & { children?: React.ReactNode }
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
  const { children = [], component } = block;
  const { options = {}, type } = component;
  const Component = ComponentMapping[type];

  return (
    <Component {...(options as any)} key={block.id}>
      {children.map(b => mapBlock(b))}
    </Component>
  );
};

export const render = (schema: Schema): JSX.Element[] => {
  return schema.blocks.map(b => mapBlock(b));
};
