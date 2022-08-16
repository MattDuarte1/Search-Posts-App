import { render, screen } from '@testing-library/react';
import { NotFound } from '.';

describe('<NotFound />', () => {
  it('should render dont have the post', () => {
    render(<NotFound search="bla bla bla" />);

    const item = screen.getByRole('heading', { name: /bla bla bla/i });

    expect(item).toBeInTheDocument();
  });
});
