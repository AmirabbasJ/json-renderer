export interface Component<
  T extends string,
  O extends Record<string, any> | undefined = undefined,
> {
  type: T;
  options?: O;
}
