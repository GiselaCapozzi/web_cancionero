import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const useSong = () => {

  const [canciones, setCanciones] = useState([]);

  const getSongs = async () => {
    try {
      await fetch('https://web-cancionero-zeta.vercel.app/songs')
        .then(res => res.json())
        .then(data => setCanciones(data))
        .catch(err => console.log(err))
    } catch (error) {
      console.log('Error al obtener los libros')
    }
  }

  useEffect(() => {
    getSongs()
  }, []);

  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() < 10 ? `0${fecha.getMonth() + 1}` : `${fecha.getMonth() + 1}`;
  const anio = fecha.getFullYear();
  const fechaCompleta = `${dia}/${mes}/${anio}`;

  const obtenrUsuario = sessionStorage.getItem('usuario');
  const usuario = JSON.parse(obtenrUsuario);

  const deleteSong = async (id) => {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro de borrar la canción?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrarla!'
      })

      if (result.isConfirmed) {
        const response = await fetch(`https://web-cancionero-zeta.vercel.app/songs/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          await getSongs(); // Actualiza la lista de canciones después de borrar
          Swal.fire({
            title: 'Borrada!',
            text: 'La canción ha sido eliminada',
            icon: 'success'
          });
        } else {
          throw new Error('Error al borrar la canción');
        }
      }
    } catch (error) {
      console.error('Error borrando la canción', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al borrar la canción',
        icon: 'error'
      })
    }
  }

  return {
    canciones,
    fechaCompleta,
    usuario,
    deleteSong
  }
}

export default useSong