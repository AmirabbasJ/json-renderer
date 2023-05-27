import type { Component } from './Component';
import { Types } from './Types';

export type BoxComponent = Component<'box'>;
export const BoxComponent: BoxComponent = { type: Types.box };
