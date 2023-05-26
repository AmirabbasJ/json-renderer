import type {
  BoxComponent,
  ButtonComponent,
  ColumnsComponent,
  ImageComponent,
  SectionComponent,
  TextComponent,
} from './components';

export type Component =
  | BoxComponent
  | ButtonComponent
  | ColumnsComponent
  | ImageComponent
  | SectionComponent
  | TextComponent;

export interface Block {
  id: string;
  component: Component;
  children?: Block[];
}
