import { render, screen } from '@testing-library/react';

test('smoke', () => {
  it('should pass', () => {
    render(<p>smoke</p>);

    expect(screen.getByText('smoke')).toBeInTheDocument();
  });
});
