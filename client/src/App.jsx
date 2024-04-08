import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Nav from './components/Nav/Nav';
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import FormSong from './components/FormSong/FormSong';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/form_song' element={<FormSong />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
