import type { BaseComponent } from './BaseComponent';

export interface Block {
  id: string;
  component: BaseComponent;
  children: Block[];
}
