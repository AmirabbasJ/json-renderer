import type { Block } from '../Block';
import type { Component } from './Component';

interface Column {
  blocks: Block[];
}

export interface ColumnsOptions {
  columns: Column[];
  space: number;
  stackColumnsAt: string;
  reverseColumnsWhenStacked: boolean;
}

export type ColumnsComponent = Component<'columns', ColumnsOptions>;
