import type { Component } from './Component';

interface SectionOptions {
  maxWidth: number;
}

export type SectionComponent = Component<'section', SectionOptions>;
