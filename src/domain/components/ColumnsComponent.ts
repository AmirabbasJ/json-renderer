import type { Block } from '../Block';
import type { Component } from './Component';

interface Column {
  blocks: Block[];
}

interface ColumnsOptions {
  columns: Column[];
}

export type ColumnsComponent = Component<'columns', ColumnsOptions>;
