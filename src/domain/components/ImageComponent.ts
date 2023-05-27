import type { CSSProperties } from 'react';
import { z } from 'zod';

import type { Component } from './Component';

export const ImageOptions = z.intersection(
  z.object({
    image: z.string(),
    lazy: z.optional(z.boolean()),
    sizes: z.optional(z.string()),
  }),
  z.record(z.any()),
);

export interface ImageOptions extends CSSProperties {
  image: string;
  lazy?: boolean;
  sizes?: string;
}

export type ImageComponent = Component<'image', ImageOptions>;
