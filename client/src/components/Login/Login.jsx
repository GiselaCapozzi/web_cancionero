import useLogin from '../../hooks/useLogin';
import './Login.css';

const Login = () => {

const { handleLogin, obtenerUsuario } = useLogin();

  return (
    <>
      <form className='container-form' onSubmit={handleLogin}>
        <p>¡Solo el administrador puede iniciar sesión!</p>
        <div className='form'>
          <input
            className="email"
            type="email"
            placeholder="usuario@ejemplo.com"
            onChange={obtenerUsuario}
            name='email'
          />
          <input
            className="password"
            type="password"
            placeholder="**********"
            onChange={obtenerUsuario}
            name='password'
          />
          <input
            type="submit"
            value="Ingresar"
          />
        </div>
      </form>
    </>
  )
}

export default Login