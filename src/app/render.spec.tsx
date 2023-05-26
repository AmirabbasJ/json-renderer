import { render as domRender, screen } from '@testing-library/react';

import type { Block, Schema } from '../domain';
import { render } from './render';

const testSchema: Schema = {
  title: 'test',
  blocks: [],
  url: '/',
};

describe('render', () => {
  it('should render empty schema', () => {
    expect(() => render(testSchema)).not.toThrow();
  });

  const text = 'a simple text';
  const textBlock: Block = {
    id: 'text-id',
    component: { type: 'text', options: { text } },
  };

  describe('Text', () => {
    it('should render text component', () => {
      const els = render({ ...testSchema, blocks: [textBlock] });

      domRender(<>{els}</>);

      expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('should render multiple text components', () => {
      const els = render({
        ...testSchema,
        blocks: [textBlock, { ...textBlock, id: 'text-id-2' }],
      });

      domRender(<>{els}</>);

      expect(screen.getAllByText(text)).length(2);
    });
  });

  describe('Box', () => {
    const boxBlock: Block = {
      id: 'text-id',
      component: { type: 'box' },
      children: [textBlock, { ...textBlock, id: 'text-id-2' }],
    };

    it('should render box component', () => {
      const els = render({ ...testSchema, blocks: [boxBlock] });

      domRender(<>{els}</>);

      expect(screen.getAllByText(text)).length(2);
    });
  });
});
