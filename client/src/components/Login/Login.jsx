import './Login.css';

const Login = () => {
  return (
    <>
      <form className='container-form'>
      <p>¡Solo el administrador puede iniciar sesión!</p>
        <div className='form'>
          <input
            className="email"
            type="email"
            placeholder="usuario@ejemplo.com"
          />
          <input
            className="password"
            type="password"
            placeholder="**********"
          />
          <input type="button" value="Ingresar" />
        </div>
      </form>
    </>
  )
}

export default Login