import type {
  BoxComponent,
  ColumnsComponent,
  SectionComponent,
  TextComponent,
} from './components';

export type Component =
  | BoxComponent
  | ColumnsComponent
  | SectionComponent
  | TextComponent;

export interface Block {
  id: string;
  component: Component;
  children?: Block[];
}
