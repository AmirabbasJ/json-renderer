import type {
  BoxComponent,
  SectionComponent,
  TextComponent,
} from './components';

export type Component = BoxComponent | SectionComponent | TextComponent;

export interface Block {
  id: string;
  component: Component;
  children?: Block[];
}
