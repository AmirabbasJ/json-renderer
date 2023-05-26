import type { Component } from './Component';

interface TextOptions {
  text: string;
}

export type TextComponent = Component<'text', TextOptions>;
