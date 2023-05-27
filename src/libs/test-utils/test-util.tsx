import type { RenderOptions } from '@testing-library/react';
import { render as RtlRender } from '@testing-library/react';
import type { ReactElement } from 'react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => RtlRender(ui, { wrapper: AllTheProviders, ...options });
