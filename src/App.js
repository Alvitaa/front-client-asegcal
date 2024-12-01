import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import LandingPage from './pages/landing-page/LandingPage.js';
import CentrosAdopcion from './pages/centros-adopcion/CentrosAdopcion.js';
import RegistroVoluntarios from './pages/regitro-voluntarios/RegistroVoluntarios.js';
import RegistroDonaciones from './pages/registro-donaciones/RegistroDonaciones.js';
import Gracias from './pages/gracias/Gracias.js';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/adopcion' element={<CentrosAdopcion/>}/>
          <Route path='/voluntarios' element={<RegistroVoluntarios/>}/>
          <Route path='/donaciones' element={<RegistroDonaciones/>}/>
          <Route path='/gracias' element={<Gracias/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
