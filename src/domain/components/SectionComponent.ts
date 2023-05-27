import { z } from 'zod';

import type { Component } from './Component';

export const SectionOptions = z.object({
  maxWidth: z.number(),
});

export interface SectionOptions {
  maxWidth: number;
}

export type SectionComponent = Component<'image', SectionOptions>;
