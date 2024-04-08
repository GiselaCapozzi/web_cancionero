import './FormSong.css';

const FormSong = () => {
  return (
    <>
      <form className='container_form'>
        <div className="form">
        <p>Ingrese de una canción por vez</p>
          <div className='form_title'>
            <label>Título</label>
            <input type="text" name="" id="" />
          </div>
          <div className='form_song'>
            <label>Letra</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <input type="submit" value='Ingresar' />
        </div>
      </form>
    </>
  )
}

export default FormSong