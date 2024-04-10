// import { useState, useEffect } from 'react';
import useFormSong from '../../hooks/useFormSong';
import './FormSong.css';

const FormSong = () => {

  const { handleForm, handleSubmit, error } = useFormSong();

  return (
    <>
      <form className='container_form' onSubmit={handleSubmit}>
        <div className="form">
          <p>Ingrese de una canción por vez</p>
          <div className='form_title'>
            <label>Título</label>
            <input
              type="text"
              name="titulo"
              onChange={handleForm}
            />
          </div>
          <div className='form_song'>
            <label>Letra</label>
            <textarea
              name="letra"
              cols="30"
              rows="10"
              onChange={handleForm}
            ></textarea>
          </div>
          <p>{error}</p>
          <input type="submit" value='Ingresar' />
        </div>
      </form>
    </>
  )
}

export default FormSong