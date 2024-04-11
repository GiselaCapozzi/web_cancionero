import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <div className="container-footer">
      <div className='footer'>
        <Link 
          to='https://www.facebook.com/PdelapazWilde' 
          target='_blank'
        >
          <FontAwesomeIcon
            icon={faSquareFacebook}
            color='blue'
            className='icono'
          />
        </Link>
        <p className='copyright'>© Copyright 2024 por GiselaCapozzi</p>
      </div>
    </div>
  )
}

export default Footer