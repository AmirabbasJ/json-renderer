import { render as domRender, screen, waitFor } from '@testing-library/react';

import type { Block, ImageComponent, Schema } from '../domain';
import { render } from './render';

const testSchema: Schema = {
  title: 'test',
  blocks: [],
  url: '/',
};

// TODO: add a stub generator to generate these
const text = 'a simple text';
const cText = (): Block => ({
  id: `text-id-${Math.floor(Math.random() * 1000)}`,
  component: { type: 'text', options: { text } },
});

describe('render', () => {
  it('should change the default title', async () => {
    domRender(render(testSchema));

    await waitFor(() => expect(document.title).toEqual(testSchema.title));
  });

  describe('Text', () => {
    it('should render text component', () => {
      const els = render({ ...testSchema, blocks: [cText()] });

      domRender(<>{els}</>);

      expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('should render multiple text components', () => {
      const els = render({
        ...testSchema,
        blocks: [cText(), cText()],
      });

      domRender(<>{els}</>);

      expect(screen.getAllByText(text)).length(2);
    });
  });

  describe('Box', () => {
    const boxBlock: Block = {
      id: 'box-id',
      component: { type: 'box' },
      children: [cText(), cText()],
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
      children: [cText()],
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
      children: [cText()],
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

  describe('Columns', () => {
    const columnsBlock: Block = {
      id: 'columns-id',
      component: {
        type: 'columns',
        options: {
          columns: [],
          space: 42,
          stackColumnsAt: 'tablet',
          reverseColumnsWhenStacked: false,
        },
      },
      children: [cText()],
    };

    it('should render columns component', () => {
      const els = render({ ...testSchema, blocks: [columnsBlock] });

      const { container } = domRender(<>{els}</>);

      expect(container.querySelector('div')).toBeInTheDocument();
    });

    it('should render columns component without children', () => {
      const els = render({ ...testSchema, blocks: [columnsBlock] });

      domRender(<>{els}</>);

      expect(screen.queryByText(text)).toBeNull();
    });

    it('should render columns component with children when columns is not empty', () => {
      const columnsBlockWithCols: Block = {
        id: 'columns-id-2',
        component: {
          type: 'columns',
          options: {
            columns: [
              { blocks: [cText(), cText(), cText()] },
              { blocks: [cText(), cText(), cText()] },
            ],
            space: 42,
            stackColumnsAt: 'tablet',
            reverseColumnsWhenStacked: false,
          },
        },
        children: [cText()],
      };
      const els = render({ ...testSchema, blocks: [columnsBlockWithCols] });

      domRender(<>{els}</>);

      expect(screen.queryAllByText(text)).length(6);
    });
  });

  describe('Button', () => {
    const buttonText = 'a button';
    const buttonBlock: Block = {
      id: 'button-id',
      component: { type: 'button', options: { text: buttonText } },
      children: [cText()],
    };

    it('should button component with text', () => {
      const els = render({ ...testSchema, blocks: [buttonBlock] });

      domRender(<>{els}</>);

      expect(
        screen.getByRole('button', {
          name: buttonText,
        }),
      ).toBeInTheDocument();
    });
  });
});
