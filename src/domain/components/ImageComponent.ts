import type { CSSProperties } from 'react';

import type { Component } from './Component';

export interface ImageOptions extends CSSProperties {
  image: string;
  lazy?: boolean;
  sizes?: string;
}

export type ImageComponent = Component<'image', ImageOptions>;
