import type { Block, Component, Schema } from '@/domain';
import { Box, Image, Section, Text } from '@/ui';

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
