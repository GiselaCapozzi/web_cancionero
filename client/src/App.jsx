import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Nav from './components/Nav/Nav';
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
