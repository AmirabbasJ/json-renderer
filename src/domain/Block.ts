import type { CSSProperties } from 'react';

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
  // | ButtonComponent
  // | ColumnsComponent
  // | ImageComponent
  | SectionComponent
  | TextComponent;
interface ResponsiveStyles {
  large: CSSProperties;
  medium: CSSProperties;
  small: CSSProperties;
}

export interface Block {
  id: string;
  component: Component;
  children?: Block[];
  responsiveStyles?: ResponsiveStyles;
}
