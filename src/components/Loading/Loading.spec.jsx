import { render } from '@testing-library/react';
import { Loading } from '.';

it('should match snapshot', () => {
  const { container } = render(<Loading />);

  expect(container.firstChild).toMatchSnapshot();
});
