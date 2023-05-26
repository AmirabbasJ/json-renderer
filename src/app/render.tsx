import React from 'react';

import type { Block, Component, Schema } from '@/domain';
import { Box, Text } from '@/ui';

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
};

const mapBlock = (block: Block): JSX.Element => {
  const { options = {}, type } = block.component;
  const Component = ComponentMapping[type];
  return (
    <Component {...(options as any)} key={block.id}>
      {block.children?.map(b => mapBlock(b))}
    </Component>
  );
};

export const render = (schema: Schema): JSX.Element[] => {
  return schema.blocks.map(b => mapBlock(b));
};
