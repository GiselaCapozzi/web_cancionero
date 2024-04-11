import ntraSraLaPaz from "../../assets/image/ntra_sra_paz2.jpg";
import './Home.css';

const Home = () => {
  return (
    <div className="container-imagen">
      <img className="lapaz" src={ntraSraLaPaz} alt="" />
      <h3 className="titulo">Cancionero</h3>
    </div>
  )
}

export default Home