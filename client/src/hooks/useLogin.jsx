import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';

const useLogin = () => {
  
  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  });

  console.log(usuario)

  const navigate = useNavigate();

  const obtenerUsuario = ({ target: { name, value } }) => {
    setUsuario({
      ...usuario,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario.email === 'admin_lapaz@admin.com' && usuario.password === 'ntrasra_lapaz24') {
      Swal.fire({
        title: 'Inicio de sesión exitoso',
        text: 'En minutos será redirigido',
        timer: 2000,
        showConfirmButton: false,
        icon: 'success'
      })

      sessionStorage.setItem('usuario', JSON.stringify(usuario));

      navigate('/');
    } else {
      Swal.fire({
        title: 'Error al iniciar sesión',
        text: 'Email o password incorrecto',
        icon: 'error'
      })
    }
    setUsuario({
      email: '',
      password: ''
    })
  }
  
  return {
    obtenerUsuario,
    handleLogin,
    usuario
  }
}

export default useLogin