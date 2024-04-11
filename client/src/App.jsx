import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Nav from './components/Nav/Nav';
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import FormSong from './components/FormSong/FormSong';
import Song from './components/Song/Song';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/form_song' element={<FormSong />} />
        <Route path='/song' element={<Song />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
