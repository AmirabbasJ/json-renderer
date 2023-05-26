import type { Component } from './Component';

interface ButtonOptions {
  text: string;
}

export type ButtonComponent = Component<'button', ButtonOptions>;
