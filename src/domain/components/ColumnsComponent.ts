import { z } from 'zod';

// eslint-disable-next-line import/no-cycle
import { Block } from '../Block';
import type { Component } from './Component';

interface Column {
  blocks: Block[];
}

export const ColumnsOptions = z.object({
  columns: z.lazy(() => z.array(z.object({ blocks: z.array(Block) }))),
  space: z.number(),
  stackColumnsAt: z.string(),
  reverseColumnsWhenStacked: z.boolean(),
});

export interface ColumnsOptions {
  columns: Column[];
  space: number;
  stackColumnsAt: string;
  reverseColumnsWhenStacked: boolean;
}

export type ColumnsComponent = Component<'columns', ColumnsOptions>;
