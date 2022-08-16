import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Home from '.';

const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/posts',
    async (req, res, ctx) => {
      return res(
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: 'title 1',
            body: 'lalalal la',
          },
          {
            userId: 2,
            id: 2,
            title: 'title 2',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          },
          {
            userId: 3,
            id: 3,
            title: 'title 3',
            body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
          },
          {
            userId: 4,
            id: 4,
            title: 'title 4',
            body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
          },
          {
            userId: 5,
            id: 5,
            title: 'title 5',
            body: 'lalalal la',
          },
          {
            userId: 6,
            id: 6,
            title: 'title 6',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          },
          {
            userId: 7,
            id: 7,
            title: 'title 7',
            body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
          },
          {
            userId: 8,
            id: 8,
            title: 'title 8',
            body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
          },
          {
            userId: 9,
            id: 9,
            title: 'title 9',
            body: 'lalalal la',
          },
          {
            userId: 10,
            id: 10,
            title: 'title 10',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          },
          {
            userId: 11,
            id: 11,
            title: 'title 11',
            body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
          },
        ]),
      );
    },
  ),
  rest.get(
    'https://jsonplaceholder.typicode.com/photos',
    async (req, res, ctx) => {
      return res(
        ctx.json([
          {
            albumId: 1,
            id: 1,
            title: 'accusamus beatae ad facilis cum similique qui sunt',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          },
          {
            albumId: 1,
            id: 2,
            title: 'reprehenderit est deserunt velit ipsam',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796',
          },
          {
            albumId: 1,
            id: 3,
            title: 'officia porro iure quia iusto qui ipsa ut modi',
            url: 'https://via.placeholder.com/600/24f355',
            thumbnailUrl: 'https://via.placeholder.com/150/24f355',
          },
          {
            albumId: 1,
            id: 4,
            title: 'tt4',
            url: 'https://via.placeholder.com/600/24f355',
            thumbnailUrl: 'https://via.placeholder.com/150/24f355',
          },
          {
            albumId: 1,
            id: 5,
            title: 'tt5',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          },
          {
            albumId: 1,
            id: 6,
            title: 'tt6',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796',
          },
          {
            albumId: 1,
            id: 7,
            title: 'tt7',
            url: 'https://via.placeholder.com/600/24f355',
            thumbnailUrl: 'https://via.placeholder.com/150/24f355',
          },
          {
            albumId: 1,
            id: 8,
            title: 'tt8',
            url: 'https://via.placeholder.com/600/24f355',
            thumbnailUrl: 'https://via.placeholder.com/150/24f355',
          },
          {
            albumId: 1,
            id: 9,
            title: 'tt9',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          },
          {
            albumId: 1,
            id: 10,
            title: 'tt10',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796',
          },
          {
            albumId: 1,
            id: 11,
            title: 'tt11',
            url: 'https://via.placeholder.com/600/24f355',
            thumbnailUrl: 'https://via.placeholder.com/150/24f355',
          },
        ]),
      );
    },
  ),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render search, posts, and load more', async () => {
    render(<Home />);

    const loadingPosts = screen.getByRole('heading', { name: /loading/i });

    await waitForElementToBeRemoved(loadingPosts);

    expect.assertions(3);

    const search = screen.getByPlaceholderText(/pesquise aqui/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(10);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    render(<Home />);
    const loadingPosts = screen.getByRole('heading', { name: /loading/i });
    await waitForElementToBeRemoved(loadingPosts);

    const search = screen.getByPlaceholderText(/pesquise aqui/i);

    expect(
      screen.getByRole('heading', { name: 'title 1 - 1' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title 2 - 2' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'title 11 - 11' }),
    ).not.toBeInTheDocument();

    userEvent.type(search, 'title 1');
    expect(
      screen.getByRole('heading', { name: 'title 1 - 1' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'title 2 - 2' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'title 3 - 3' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Search Value: title 1' }),
    ).toBeInTheDocument();

    userEvent.clear(search);
    expect(
      screen.getByRole('heading', { name: 'title 1 - 1' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'title 2 - 2' }),
    ).toBeInTheDocument();

    userEvent.type(search, 'bla bla');
    expect(
      screen.getByText('O Post bla bla não foi encontrado!'),
    ).toBeInTheDocument();
  });

  it('should load more posts', async () => {
    render(<Home />);
    const loadingPosts = screen.getByRole('heading', { name: /loading/i });

    await waitForElementToBeRemoved(loadingPosts);

    const button = screen.getByRole('button', { name: /load more posts/i });
    userEvent.click(button);
    expect(
      screen.getByRole('heading', { name: 'title 3 - 3' }),
    ).toBeInTheDocument();
  });
});
