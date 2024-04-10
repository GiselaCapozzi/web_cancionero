import { useState } from 'react';

const useFormSong = () => {
  
  const [infoSong, setInfoSong] = useState({
    titulo: '',
    letra: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('https://web-cancionero.vercel.app/songs', {
      method: 'POST',
      body: JSON.stringify(infoSong),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const handleForm = ({ target: { name, value } }) => {
    setInfoSong({
      ...infoSong,
      [name]: value
    })
  }
  
  return {
    handleForm,
    handleSubmit
  }
}

export default useFormSong