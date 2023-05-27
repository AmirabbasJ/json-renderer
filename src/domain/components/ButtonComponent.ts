import type { Component } from './Component';

export interface ButtonOptions {
  text: string;
}

export type ButtonComponent = Component<'button', ButtonOptions>;
