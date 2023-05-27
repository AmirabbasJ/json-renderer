import type {
  BoxComponent,
  ButtonComponent,
  ColumnsComponent,
  ImageComponent,
  SectionComponent,
  TextComponent,
} from './components';
import type { ResponsiveStyles } from './ResponsiveStyles';

export type Component =
  | BoxComponent
  | ButtonComponent
  | ColumnsComponent
  | ImageComponent
  | SectionComponent
  | TextComponent;

export interface Block {
  id: string;
  component?: Component;
  children?: Block[];
  responsiveStyles?: ResponsiveStyles;
}
