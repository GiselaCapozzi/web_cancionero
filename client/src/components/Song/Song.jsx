import useSong from '../../hooks/useSong';
import './Song.css';

const Song = () => {

  const { canciones, fechaCompleta, usuario, deleteSong } = useSong();

  return (
    <div className='container_song'>
      <h3>Canciones del día {fechaCompleta}</h3>
      {
        canciones.length > 0 ? canciones.map(cancion => (
          <div key={cancion.id} className='song'>
            {
              usuario && usuario.email && <button onClick={() => deleteSong(cancion.id)}>X</button>
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