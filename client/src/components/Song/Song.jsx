import { canciones } from '../../canciones';
import './Song.css';

const Song = () => {

  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth();
  const anio = fecha.getFullYear();
  const fechaCompleta = `${dia}/${mes}/${anio}`;

  const obtenrUsuario = sessionStorage.getItem('usuario');
  const usuario = JSON.parse(obtenrUsuario);

  return (
    <div className='container_song'>
      <h3>Canciones del día {fechaCompleta}</h3>
      {
        canciones.length > 0 ? canciones.map(cancion => (
          <div key={cancion.id} className='song'>
            {
             usuario && usuario.email && <button>X</button>
            }
            <h4>{cancion.titulo}</h4>
            <p>{cancion.letra}</p>
          </div>
        )) :
        <p>No hay canciones agregadas aún</p>
      }
    </div>
  )
}

export default Song