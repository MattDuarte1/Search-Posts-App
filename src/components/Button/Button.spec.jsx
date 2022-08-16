import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './index';

describe('<Button />', () => {
  it('Should render the button with the text', () => {
    const fn = jest.fn();
    render(<Button text={'Testando'} func={fn} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /testando/i });
    expect(button).toBeInTheDocument();
  });

  it('Should call function on button click', () => {
    const fn = jest.fn();

    render(<Button text={'Testando'} func={fn} />);

    const button = screen.getByRole('button', { name: /testando/i });
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text={'Testando'} func={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
