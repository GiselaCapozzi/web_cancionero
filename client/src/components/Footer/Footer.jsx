import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <div className="container-footer">
      <FontAwesomeIcon icon={faLaptop} />
    </div>
  )
}

export default Footer