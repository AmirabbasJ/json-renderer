import type { Components } from './components';

export interface Block {
  id: string;
  component: Components;
  children?: Block[];
}
