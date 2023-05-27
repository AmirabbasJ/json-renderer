import { z } from 'zod';

import type { Component } from './Component';

export const TextOptions = z.object({
  text: z.string(),
});

export interface TextOptions {
  text: string;
}

export type TextComponent = Component<'text', TextOptions>;
