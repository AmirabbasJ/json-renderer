export const Types = {
  box: 'box',
  button: 'button',
  columns: 'columns',
  image: 'image',
  section: 'section',
  text: 'text',
} as const;

export type Types = (typeof Types)[keyof typeof Types];
