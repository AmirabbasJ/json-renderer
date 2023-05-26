import type { Component } from './Component';

export interface TextOptions {
  text: string;
}

export type TextComponent = Component<'text', TextOptions>;
