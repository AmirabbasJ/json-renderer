import type { Component } from './Component';

export interface SectionOptions {
  maxWidth: number;
}

export type SectionComponent = Component<'section', SectionOptions>;
