import { screen, waitFor } from '@testing-library/react';

import type { Block, ImageComponent, Schema } from '@/domain';
import { Types } from '@/domain';
import { render } from '@/test-utils';

import { JsonRenderer } from './JsonRenderer';

const testSchema: Schema = {
  title: 'test',
  blocks: [],
  url: '/',
};

// TODO: add a stub generator to generate these
const text = 'a simple text';
const cText = (): Block => ({
  id: `text-id-${Math.floor(Math.random() * 1000)}`,
  component: { type: Types.text, options: { text } },
});

describe('render', () => {
  it('should change the default title', async () => {
    render(<JsonRenderer schema={testSchema} />);
    await waitFor(() => expect(document.title).toEqual(testSchema.title));
  });

  describe('Text', () => {
    it('should render text component', () => {
      render(<JsonRenderer schema={{ ...testSchema, blocks: [cText()] }} />);

      expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('should render multiple text components', () => {
      render(
        <JsonRenderer
          schema={{
            ...testSchema,
            blocks: [cText(), cText()],
          }}
        />,
      );

      expect(screen.getAllByText(text)).length(2);
    });
  });

  describe('Box', () => {
    const boxBlock: Block = {
      id: 'box-id',
      component: { type: Types.box },
      children: [cText(), cText()],
    };

    it('should render box component', () => {
      render(<JsonRenderer schema={{ ...testSchema, blocks: [boxBlock] }} />);

      expect(screen.getAllByText(text)).length(2);
    });
  });

  describe('Section', () => {
    const sectionBlock: Block = {
      id: 'section-id',
      component: { type: Types.section, options: { maxWidth: 100 } },
      children: [cText()],
    };

    it('should render section component', () => {
      const { container } = render(
        <JsonRenderer schema={{ ...testSchema, blocks: [sectionBlock] }} />,
      );

      expect(container.querySelector(Types.section)).toBeInTheDocument();
    });

    it('should apply maxWidth style for section component', () => {
      const { container } = render(
        <JsonRenderer schema={{ ...testSchema, blocks: [sectionBlock] }} />,
      );

      expect(container.querySelector(Types.section)).toHaveStyle(
        'max-width: 100px',
      );
    });
  });

  describe('Image', () => {
    const ImageBlock = {
      id: 'image-id',
      component: {
        type: Types.image,
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
      const { container } = render(
        <JsonRenderer schema={{ ...testSchema, blocks: [ImageBlock] }} />,
      );

      expect(container.querySelector('img')).toHaveAttribute(
        'src',
        ImageBlock.component.options.image,
      );
    });

    it('should not render children for images', () => {
      render(<JsonRenderer schema={{ ...testSchema, blocks: [ImageBlock] }} />);

      expect(screen.queryByText(text)).toBeNull();
    });
  });

  describe('Columns', () => {
    const columnsBlock: Block = {
      id: 'columns-id',
      component: {
        type: Types.columns,
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
      const { container } = render(
        <JsonRenderer schema={{ ...testSchema, blocks: [columnsBlock] }} />,
      );

      expect(container.querySelector('div')).toBeInTheDocument();
    });

    it('should render columns component without children', () => {
      render(
        <JsonRenderer schema={{ ...testSchema, blocks: [columnsBlock] }} />,
      );

      expect(screen.queryByText(text)).toBeNull();
    });

    it('should render columns component with columns', () => {
      const columnsBlockWithCols: Block = {
        id: 'columns-id',
        component: {
          type: Types.columns,
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

      render(
        <JsonRenderer
          schema={{ ...testSchema, blocks: [columnsBlockWithCols] }}
        />,
      );

      expect(screen.queryAllByText(text)).length(6);
    });

    it('should render columns component columns with box when no component is set on blocks', () => {
      const columnsBlockWithCols: Block = {
        id: 'columns-id',
        component: {
          type: Types.columns,
          options: {
            columns: [
              {
                blocks: [{ id: 'block-1', children: [cText(), cText()] }],
              },
              {
                blocks: [{ id: 'block-2', children: [cText(), cText()] }],
              },
            ],
            space: 42,
            stackColumnsAt: 'tablet',
            reverseColumnsWhenStacked: false,
          },
        },
        children: [cText()],
      };

      const { container } = render(
        <JsonRenderer
          schema={{ ...testSchema, blocks: [columnsBlockWithCols] }}
        />,
      );

      expect(container.querySelectorAll('div > div > p')).length(4);
    });
  });

  describe('Button', () => {
    const buttonText = 'a button';
    const buttonBlock: Block = {
      id: 'button-id',
      component: { type: Types.button, options: { text: buttonText } },
      children: [cText()],
    };

    it('should button component with text', () => {
      render(
        <JsonRenderer schema={{ ...testSchema, blocks: [buttonBlock] }} />,
      );

      expect(
        screen.getByRole(Types.button, {
          name: buttonText,
        }),
      ).toBeInTheDocument();
    });
  });
});
