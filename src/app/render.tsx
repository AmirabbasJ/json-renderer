import type { Block, Component, Schema } from '@/domain';
import { Text } from '@/ui';

type ComponentMapping = {
  [K in Component as K['type']]: React.FC<K['options']>;
};

const ComponentMapping: ComponentMapping = {
  text: Text,
};

const mapBlock = (block: Block): JSX.Element => {
  const Component = ComponentMapping[block.component.type];
  return <Component {...block.component.options} key={block.id} />;
};

export const render = (schema: Schema): JSX.Element[] => {
  return schema.blocks.map(b => mapBlock(b));
};
