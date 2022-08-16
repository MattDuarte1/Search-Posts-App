import './styles.css';
import P from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

export const NotFound = ({ search }) => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div>
          <FaWindowClose fontSize={100} color={'red'} />
        </div>

        <h1>O Post {search} não foi encontrado!</h1>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  search: P.string.isRequired,
};
