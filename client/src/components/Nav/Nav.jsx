import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <div className="container-nav">
      <ul>
        <li><Link>Cancionero</Link></li>
        <li><Link>Formulario</Link></li>
        <li><Link to='/login'>Inicio de Sesión</Link></li>
      </ul>
    </div>
  )
}

export default Nav