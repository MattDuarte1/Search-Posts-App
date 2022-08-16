import { render, screen } from '@testing-library/react';
import { PostCard } from './index';
import { postCardMock } from './mock';

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...postCardMock} />);

    expect(screen.getByRole('img', { name: /alguma coisa/i })).toHaveAttribute(
      'src',
      'img/img.png',
    );
    expect(
      screen.getByRole('heading', { name: /alguma coisa/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...postCardMock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
