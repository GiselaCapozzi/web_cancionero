import { Link } from 'react-router-dom';

import ntra_sra_paz from '../../assets/image/ntra_sra_paz.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className='container-header'>
      <Link to='/' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container-img">
          <img className='virgen' src={ntra_sra_paz} alt="Nuestra Señora de la Paz" />
        </div>
        <div className='container-titulo'>
          <h4 className='titulo'>Nuestra Señora de La Paz</h4>
          <p>- Wilde -</p>
        </div>
      </Link>
    </div>
  )
}

export default Header