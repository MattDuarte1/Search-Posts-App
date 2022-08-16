import './styles.css';
import P from 'prop-types';

export const TextInput = ({ inputValue, handleChange }) => (
  <input
    className="text-input"
    type="search"
    value={inputValue}
    placeholder="pesquise aqui"
    onChange={(e) => handleChange(e)}
  />
);

TextInput.propTypes = {
  inputValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
