import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const useSong = () => {

  const [canciones, setCanciones] = useState([]);

  const getSongs = async () => {
    await fetch('http://localhost:8081/songs')
      .then(res => res.json())
      .then(data => setCanciones(data))
  }

  useEffect(() => {
    getSongs()
  }, []);

  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth();
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
        const response = await fetch(`http://localhost:8081/songs/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          await getSongs();
          Swal.fire({
            title: 'Borrada!',
            text: 'La canción ha sido eliminada',
            icon: 'success'
          });
        } else {
          throw new Error('Error al borrar la canción')
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