import { z } from 'zod';

import { Block } from './Block';

export interface Schema {
  title: string;
  url: string;
  blocks: Block[];
}

export const Schema = z.object({
  title: z.string(),
  blocks: z.array(Block),
  url: z.string(),
});
