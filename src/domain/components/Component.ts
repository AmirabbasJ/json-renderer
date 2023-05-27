export type Component<
  T extends string,
  O extends Record<string, any> | undefined = undefined,
> = (O extends undefined ? { options?: never } : { options: O }) & {
  type: T;
};
