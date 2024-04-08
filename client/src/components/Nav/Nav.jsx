import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();

  const obtenrUsuario = sessionStorage.getItem('usuario');
  const usuario = JSON.parse(obtenrUsuario);

  const handleCerrarSesion = () => {
    sessionStorage.clear();
    navigate('/');
  }

  return (
    <div className="container-nav">
      <ul>
        <li><Link>Cancionero</Link></li>
        {
          usuario && usuario.email ?
            <>
              <li><Link to='/form_song'>Formulario</Link></li>
              <li><Link to='/' onClick={handleCerrarSesion}>Cerrar Sesión</Link></li>
            </> :
            <li><Link to='/login'>Inicio de Sesión</Link></li>
        }
      </ul>
    </div>
  )
}

export default Nav