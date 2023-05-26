import type { Block } from './Block';

export interface Schema {
  title: string;
  url: string;
  blocks: Block[];
}
