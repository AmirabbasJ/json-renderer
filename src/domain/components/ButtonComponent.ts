import { z } from 'zod';

import type { Component } from './Component';

export const ButtonOptions = z.object({
  text: z.string(),
});

export interface ButtonOptions {
  text: string;
}

export type ButtonComponent = Component<'button', ButtonOptions>;
