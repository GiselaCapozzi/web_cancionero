import { useState } from 'react';

const useFormSong = () => {

  const [infoSong, setInfoSong] = useState({
    titulo: '',
    letra: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (infoSong.titulo == '') return setError('El título no puede estar vació');
    if (infoSong.letra == '') return setError('La letra no puede estar vacía');

    try {
      await fetch('https://web-cancionero-zeta.vercel.app/songs', {
      method: 'POST',
      body: JSON.stringify(infoSong),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    } catch (error) {
      console.log('Error al enviar los datos:', error);
      setError('Error al enviar los datos. Por favor, inténtelo de nuevo.');
    }

    setInfoSong({
      titulo: '',
      letra: ''
    });

    setError('');
  }

  const handleForm = ({ target: { name, value } }) => {
    setInfoSong({
      ...infoSong,
      [name]: value
    })
  }

  return {
    handleForm,
    handleSubmit,
    error
  }
}

export default useFormSong