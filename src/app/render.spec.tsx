import { render as domRender, screen } from '@testing-library/react';

import type { Block, ImageComponent, Schema } from '../domain';
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
      id: 'box-id',
      component: { type: 'box' },
      children: [textBlock, { ...textBlock, id: 'text-id-2' }],
    };

    it('should render box component', () => {
      const els = render({ ...testSchema, blocks: [boxBlock] });

      domRender(<>{els}</>);

      expect(screen.getAllByText(text)).length(2);
    });
  });

  describe('Section', () => {
    const sectionBlock: Block = {
      id: 'section-id',
      component: { type: 'section', options: { maxWidth: 100 } },
      children: [textBlock],
    };

    it('should render section component', () => {
      const els = render({ ...testSchema, blocks: [sectionBlock] });

      const { container } = domRender(<>{els}</>);

      expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('should apply maxWidth style for section component', () => {
      const els = render({ ...testSchema, blocks: [sectionBlock] });

      const { container } = domRender(<>{els}</>);

      expect(container.querySelector('section')).toHaveStyle(
        'max-width: 100px',
      );
    });
  });

  describe('Image', () => {
    const ImageBlock = {
      id: 'image-id',
      component: {
        type: 'image',
        options: {
          image:
            'https://img.freepik.com/free-vector/realistic-neon-lights-background_52683-59889.jpg',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          aspectRatio: 0.7004048582995948,
          lazy: false,
          sizes: '(max-width: 638px) 94vw, (max-width: 998px) 96vw, 42vw',
        },
      } as ImageComponent,
      children: [textBlock],
    };

    it('should render image component with correct src', () => {
      const els = render({ ...testSchema, blocks: [ImageBlock] });

      const { container } = domRender(<>{els}</>);

      expect(container.querySelector('img')).toHaveAttribute(
        'src',
        ImageBlock.component.options.image,
      );
    });

    it('should not render children for images', () => {
      const els = render({ ...testSchema, blocks: [ImageBlock] });

      domRender(<>{els}</>);

      expect(screen.queryByText(text)).toBeNull();
    });
  });
});
