import './styles.css';
import P from 'prop-types';

export const Button = ({ func, text }) => (
  <button className="button" onClick={func}>
    {text}
  </button>
);

Button.propTypes = {
  text: P.string.isRequired,
  func: P.func.isRequired,
};
