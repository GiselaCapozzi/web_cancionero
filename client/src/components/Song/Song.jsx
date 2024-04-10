import useSong from '../../hooks/useSong';
import './Song.css';

const Song = () => {

  const { canciones, fechaCompleta, usuario, deleteSong } = useSong();

  // Función para dividir la letra en párrafos cada 4 líneas
  const dividirLetraEnParrafos = (letra) => {
    const lineas = letra.split('\n');
    const parrafos = [];
    for (let i = 0; i < lineas.length; i += 4) {
      parrafos.push(lineas.slice(i, i + 4).join('\n'));
    }
    return parrafos;
  };

  return (
    <div className='container_song'>
      <h3 className='fecha'>Canciones del día {fechaCompleta}</h3>
      {
        canciones.length > 0 ? canciones.map(cancion => (
          <div key={cancion.id} className='song'>
            {
              usuario && usuario.email && <button onClick={() => deleteSong(cancion.id)}>X</button>
            }
            <h4>{cancion.titulo}</h4>
            {/* Mapear cada párrafo de la letra */}
            {dividirLetraEnParrafos(cancion.letra).map((parrafo, index) => (
              <p id={index} key={index}>{parrafo}</p>
            ))}
          </div>
        )) :
          <p className='sin_canciones'>No hay canciones agregadas aún</p>
      }
    </div>
  )
}

export default Song