import ntra_sra_paz from '../../assets/image/ntra_sra_paz.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className='container-header'>
      <div className="container-img">
        <img className='virgen' src={ntra_sra_paz} alt="Nuestra Señora de la Paz" />
      </div>
      <div className='container-titulo'>
        <h4 className='titulo'>Nuestra Señora de La Paz</h4>
        <p>- Wilde -</p>
      </div>
    </div>
  )
}

export default Header