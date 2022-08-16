import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of inputValue', () => {
    const fn = jest.fn();
    render(<TextInput inputValue={'testando'} handleChange={fn} />);
    const input = screen.getByPlaceholderText(/pesquise aqui/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} inputValue="o valor" />);

    const input = screen.getByPlaceholderText(/pesquise aqui/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <TextInput inputValue="testando" handleChange={fn} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
