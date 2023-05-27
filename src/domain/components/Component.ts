import type { Types } from './Types';

export type Component<
  T extends Types,
  O extends Record<string, any> | undefined = undefined,
> = (O extends undefined ? { options?: never } : { options: O }) & {
  type: T;
};
