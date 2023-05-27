import { z } from 'zod';

import type {
  BoxComponent,
  ButtonComponent,
  ColumnsComponent,
  ImageComponent,
  SectionComponent,
  TextComponent,
} from './components';
import {
  ButtonOptions,
  ColumnsOptions,
  ImageOptions,
  SectionOptions,
  TextOptions,
  Types,
} from './components';
import type { ResponsiveStyles } from './ResponsiveStyles';

export type Component =
  | BoxComponent
  | ButtonComponent
  | ColumnsComponent
  | ImageComponent
  | SectionComponent
  | TextComponent;

export const Component = z.union([
  z.object({ type: z.literal(Types.box) }),
  z.object({
    type: z.literal(Types.button),
    options: ButtonOptions,
  }),
  z.object({ type: z.literal(Types.columns), options: ColumnsOptions }),
  z.object({ type: z.literal(Types.image), options: ImageOptions }),
  z.object({ type: z.literal(Types.section), options: SectionOptions }),
  z.object({ type: z.literal(Types.text), options: TextOptions }),
]);

export interface Block {
  id: string;
  component?: Component;
  children?: Block[];
  responsiveStyles?: ResponsiveStyles;
}

export const Block = z.object({
  id: z.string(),
  component: z.optional(z.lazy(() => Component)),
  children: z.optional(z.lazy(() => Block.array())),
  responsiveStyles: z.any(),
}) as z.ZodType<Block>;
